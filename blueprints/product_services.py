import datetime
import flask
# Dobavljanje klase blueprint iz flask modula.
from flask import Blueprint
from utils.db_connection import mysql
from flask import request

product_services = Blueprint("product_services", __name__)

@product_services.route("/getVegetables", methods=["GET"])
def vegetables():
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM product WHERE type = 'vegetable'")
    all_vegetables = cursor.fetchall()
    return flask.jsonify(all_vegetables)

@product_services.route("/getFruits", methods=["GET"])
def fruits():
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM product WHERE type = 'fruit'")
    all_fruits = cursor.fetchall()
    return flask.jsonify(all_fruits)


@product_services.route("/addProduct", methods=["POST"])
def add_product():
    data = request.json
    db = mysql.get_db()
    cursor = db.cursor()

    q = '''INSERT INTO
    product(name,Energy,Carbohydrates,Protein,TotalFat,Cholesterol,DietaryFiber,price,EngPrcnt,CrbHydrtPrcnt,PrtPrcnt,TtlFtPrcnt,chlstrlPrcnt,dietryFbrPrcnt,ntrttxt,ntrtinfo,path,type,Users_idUsers)
    VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'''

    
    cursor.execute(q, (data["name"], data["Energy"], data["Carbohydrates"], data["Protein"],
                       data["TotalFat"], data["Cholesterol"], data["DietaryFiber"], data["price"], data["EngPrcnt"], data["CrbHydrtPrcnt"], data["PrtPrcnt"], data["TtlFtPrcnt"], data["chlstrlPrcnt"], data["dietryFbrPrcnt"]
                       ,data["ntrttxt"], data["ntrtinfo"], data["path"], data["type"], data["Users_idUsers"]))
    db.commit()
    return flask.jsonify({"status": "done"}), 201   

@product_services.route("/products/<int:idproduct>", methods=["GET"])
def get_product(idproduct):
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM product WHERE idproduct=%s",idproduct)
    data = cursor.fetchone()
    if data is None:
        return "", 404
    return flask.jsonify(data)

@product_services.route("/products/<int:idproduct>", methods=["DELETE"])
def delete_post(idproduct):
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("DELETE FROM product WHERE idproduct=%s",idproduct)
    db.commit()
    return ""

@product_services.route("/product/<int:idproduct>", methods=["PUT"])
def edit_post(idproduct):
    data = request.json
    db = mysql.get_db()
    cursor = db.cursor()
    q = '''UPDATE product SET name=%s, Energy=%s, Carbohydrates=%s, Protein=%s,TotalFat=%s,Cholesterol=%s,DietaryFiber=%s,price=%s,EngPrcnt=%s,CrbHydrtPrcnt=%s,PrtPrcnt=%s,TtlFtPrcnt=%s,chlstrlPrcnt=%s,dietryFbrPrcnt=%s,ntrttxt=%s,ntrtinfo=%s,path=%s,type=%s WHERE idproduct=%s'''
    
    # data["date"] = datetime.datetime.strptime(data["date"], "%a, %d %b %Y %H:%M:%S %Z")
    cursor.execute(q, (data["name"], data["Energy"], data["Carbohydrates"], data["Protein"],data["TotalFat"], data["Cholesterol"], data["DietaryFiber"], data["price"], data["EngPrcnt"], data["CrbHydrtPrcnt"], data["PrtPrcnt"], data["TtlFtPrcnt"], data["chlstrlPrcnt"], data["dietryFbrPrcnt"],data["ntrttxt"], data["ntrtinfo"], data["path"], data["type"],idproduct))
    db.commit()
    return ""

@product_services.route("/addRecipe", methods=["POST"])
def add_recipe():
    data = request.json
    db = mysql.get_db()
    cursor = db.cursor()  
    q = '''INSERT INTO
    recipe(Users_idUsers,name,description)VALUES(%s, %s, %s)'''
    cursor.execute(q, (data["Users_idUsers"],data["name"], data["description"]))
    db.commit()
    return flask.jsonify({"status": "done"}), 201  


@product_services.route("/recipe/<int:id>", methods=["GET"])
def get_recipe(id):
    db = mysql.get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM recipe WHERE id=%s",id)
    data = cursor.fetchone()
    if data is None:
        return "", 404
    return flask.jsonify(data)


