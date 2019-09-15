from flask_wtf import FlaskForm #pip install flask_wtf

from wtforms import IntegerField, SelectField, FloatField, SubmitField, StringField #different ways of inputting, 
																	   #depending on what kind of data is fetched

class Form(FlaskForm):
	tech_stack = StringField('Desired Technologies')
	salary_range = StringField('Salary Range (USD)')
	
	# #don't forget the SubmitField, which gives the button for submitting the form 
	submit = SubmitField()