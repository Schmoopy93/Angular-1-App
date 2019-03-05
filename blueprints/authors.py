import flask
from flask import Blueprint
from flask import request

from utils.db_connection import mysql

authors_flask = Blueprint("authors_flask", __name__)

@authors_flask.route("/getAuthors", methods=["GET"])
def authors():
    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()

    return flask.jsonify(rows)

@authors_flask.route("/addAuthor", methods=["POST"])
def add_user():

    data = request.json
    db = mysql.get_db()
    cursor = db.cursor()

    q = '''INSERT INTO
    users(username,password,name,lastname,email,type,path)
    VALUES(%s, %s, %s, %s, %s, %s,%s)'''
    
    cursor.execute(q, (data["username"], data["password"],
                       data["name"], data["lastname"], data["email"],data["type"],data["path"]))
    db.commit()
    return flask.jsonify({"status": "done"}), 201

@authors_flask.route("/authors/<int:idUser>", methods=["PUT"])
def edit_user(idUser):
    data = request.json
    db = mysql.get_db()
    cursor = db.cursor()
    q = '''UPDATE users SET name=%s, lastname=%s, email=%s WHERE idUsers=%s'''
    
    cursor.execute(q, (data["name"], data["lastname"], data["email"], idUser))
    db.commit()
    return ""

@authors_flask.route("/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    # Izdvaja podatke o korisniku iz multipart zahteva
    data = json.loads(request.form.to_dict()["userData"])
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("UPDATE users SET name=%s, lastname=%s,email=%s WHERE idUsers=%s", (data["name"], data["lastname"], data["email"], idUser))
    db.commit()

    # Ukoliko je poslata avatar slicica, sacuvaj je
    if request.files.get("avatar") is not None:
        uploaded_file = request.files.get("avatar")
        # Jedino sto je bitno je ekstenzija, ime datoteke ce svakako
        # biti promenjeno.
        ext = os.path.splitext(uploaded_file.filename)[1]

        # Pre zapisivanja datoteke obavezno bi trebalo
        # proveriti ispravnost imena datoteke, medjutim
        # posto se ime datoteke kreira na serveru to u ovom
        # slucaju nije neophodno.
        # Detaljnije na: http://flask.pocoo.org/docs/0.12/patterns/fileuploads/

        # Dobavljanje naziva slike korisnika.
        uploaded_file.save("../static/media/images/user_{0}{1}".format(data["id"], ext))

        # Uklanja sve slike sem trenutno dodate
        files = os.listdir("../static/media/images")
        avatars = fnmatch.filter(files, "user_{0}.*".format(data["id"]))
        for avatar in avatars:
            if os.path.splitext(avatar)[1] != ext:
                os.remove(os.path.join("../static/media/images", avatar))
        

    return flask.jsonify({"success": True})