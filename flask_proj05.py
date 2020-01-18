"""
Waht does this module do?
"""
import re
import json
import joblib
import traceback
from flask import Flask, request
import numpy as np
import flask

# this is a pretty logger - some folks prefer the standard logging library with Python, but I think this packages is fine.
# replace all print statements with it.
from loguru import logger as log


from forms import Form  # this is from forms.py
from collections import defaultdict
import folium
from flask import Flask, render_template
import pandas as pd


app = Flask(__name__)
app.config["SECRET_KEY"] = "12345"  # secret key is necessary, but it can be any value

# load the model here, as well as other related components (dictionary, data structure containing topic-companies mapping etc.)
print("Loading models...")

kmodes_model = joblib.load("data/model.pkl")
dictionary = joblib.load("data/flask_dict.pkl")
tech_columns = joblib.load("data/column_headers.pkl")
tech_columns = [a.lower().strip() for a in tech_columns]
geo_data = json.load(open("data/custom.geo.json", "r"))


def tech_request_vec(text, columns):
    cols = columns
    input_skills_ls = [a.strip().lower() for a in text.split(",")]

    input_vec = [0] * len(cols)
    for index, col in enumerate(cols):
        if col in input_skills_ls:
            input_vec[index] = 1

    return input_vec


def salary_split(salary_range, country_salary_binned):  # returns upper range
    upper_range_input = int(salary_range.split("-")[-1][:-1])
    lower_range_input = int(salary_range.split("-")[0])
    # print(lower_range_input, upper_range_input)

    upper_range_country = int(country_salary_binned.split("-")[-1][:-1])
    lower_range_country = int(country_salary_binned.split("-")[0])
    # print(upper_range_country, lower_range_country)

    if upper_range_country < upper_range_input:
        return True
    if lower_range_country <= upper_range_input:
        return True
    if lower_range_country >= upper_range_input:
        return False
    if upper_range_country >= upper_range_input:
        return False


def get_map(df):
    m = folium.Map(location=[48, -102], zoom_start=3)

    folium.Choropleth(
        geo_data=geo_data,
        name="Choropleth",
        data=df,
        columns=["country_names", "country_respondents"],
        key_on="feature.properties.name",
        fill_color="YlGn",
        nan_fill_color="white",
        fill_opacity=0.7,
        line_opacity=0.2,
        legend_name="Percentage of Respondents",
    ).add_to(m)

    folium.LayerControl().add_to(m)
    m.save("templates/map.html")
    return m


@app.route("/", methods=["GET", "POST"])  # just POST is enough to get info
def get_predict_page():
    "Returns the rendered page"
    form = Form()
    if form.validate_on_submit():  # this makes sure your form has data
        # here I am processing what form gave me, use .data to extract the data from the fields
        # see forms.py for more information about the fields
        tech_stack = form.tech_stack.data
        salary_range = form.salary_range.data

        # I pass my processed form data to my model to make a prediction, see prediction_app.py
        predictions = get_clusters(tech_stack, salary_range)
        print(predictions)
        country_names = []
        country_respondents = []

        for country_name, country_data in predictions.items():
            country_names.append(country_name)
            country_respondents.append(country_data["PercentOfRespondents"])

        df = pd.DataFrame()
        df["country_names"] = country_names
        df["country_respondents"] = country_respondents

        mapvar = get_map(df)
        # mapvar.save('./templates/map.html')
        return mapvar._repr_html_()

        # #I pass my form and other variables to render_template so that the html can receive values
        # #to render on the page
        return flask.render_template("predictor.html", form=form)

    # if the form is invalid, no values are shown
    # this is the default
    return flask.render_template(
        "predictor.html",
        most_likely_class_name="",
        most_likely_class_prob="",
        least_likely_class_name="",
        least_likely_class_prob="",
        form=form,
    )


@app.route("/api/get-cluster/", methods=["POST"])
def get_clusters(text, salary_range):
    if request.method == "POST":
        try:

            vec = tech_request_vec(
                text, tech_columns
            )  # call function to create vector for model
            vec = [vec]  # this many needed for the .predict
            cluster_id = kmodes_model.predict(
                vec
            )  # predict on vec, returns predicted cluster id
            cluster_id = cluster_id.tolist()
            cluster_id = cluster_id[0]
            # this may return a list. if so, get first item in list cluster_id[0]

            cluster_info = dictionary[cluster_id]  # returns data in cluster

            output_response = {}
            # output_response['top_tech'] = cluster_info['top_tech']

            for country in cluster_info["country_level_info"].keys():
                for item in cluster_info["country_level_info"][country].items():
                    if item[0] == "SalaryBinned":
                        salary_bin = item[1]
                        response = salary_split(salary_range, salary_bin)
                        # print(response) # <-- it works to here
                        if response == True:
                            print(
                                salary_bin, cluster_info["country_level_info"][country]
                            )
                            # output_response.append(cluster_info['country_level_info'][country])
                            output_response[country] = cluster_info[
                                "country_level_info"
                            ][country]

            return output_response

        except Exception as e:  # typically you want to catch a specific exception, not just all exceptions.
            return json.dumps(
                {
                    "status_code": 500,
                    "status": "failure",
                    "error_msg": str(e),
                    "traceback": traceback.format_exc(),
                }
            )
    else:
        return json.dumps(
            {
                "status_code": 400,
                "status": "failure",
                "error_msg": "Request method is not POST",
            }
        )


if __name__ == "__main__":
    df = pd.DataFrame()
    df["country_names"] = []
    df["country_respondents"] = []
    get_map(df)

    # 0.0.0.0 allow other servers to connect to this one.  Read a bit about CORS - cross origin resource sharing
    app.run(host="0.0.0.0", port=5000)
