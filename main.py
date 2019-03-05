import datetime
import flask
from flask import Flask
from utils.db_connection import mysql
from flask import request
from flask import session
from flask import redirect, url_for
from blueprints.product_services import product_services
from blueprints.simple_login import simple_login
from blueprints.authors import authors_flask
# Flask aplikacija kojoj je URL za staticke podatke podesen
# na korenski URL.
app = Flask(__name__, static_url_path="")

app.secret_key = "SECRET_KEY"
UPLOAD_FOLDER = '../static/media/images/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'mydb'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)
app.register_blueprint(product_services)
app.register_blueprint(simple_login)
app.register_blueprint(authors_flask)


@app.route("/")
@app.route("/index")
@app.route("/index.html")
def home():
    '''Funkcija koja vrsi obradu zahteva.
    
    Svi zahtevi koji pristignu na URL-ove / /index i /index.html bice obradjeni ovom f-jom.
    Rezultat obrade ove funkcije je odgovor koji sadrzi podatke iscitane
    iz datoteke index.html.
    Pristupanje datom URL-u iz browsera za rezultat ce imati prikaz
    stranice izgenerisane na osnovu index.html sablona.
    '''

    return app.send_static_file("index.html")

# Pokretaje aplikacije u threaded rezimu omogucuje
# istovremenu obradu vise zahteva.
app.run("0.0.0.0", 80, threaded=True)
