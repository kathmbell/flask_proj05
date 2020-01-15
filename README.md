# flask_proj05

Install this: https://docs.docker.com/docker-for-mac/install/

run this:

```bash
docker-compose build dev
docker-compose up dev
```

Visit localhost:8000/ to see the app.


# A few comments
- dont keep code thats commented in your repo; generally poor form because its distracting to another developer trying to understand what your code does.

# linting
Its making sure your code is properly formatted.  using "black" is pretty common now:

```bash
pip install black
black flask_proj05/
```

maybe add some screenshots


Look into jinja2 inheritance for your templates files.  https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates
