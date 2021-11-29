from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__, static_url_path="")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/database.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    password = db.Column(db.String(80))
    date_created = db.Column(db.DateTime)

    def __repr__(self):
        return '<User %r>' % self.id


@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'POST':
        return 'post blaiat'

    if request.method == 'GET':
        pass
    return render_template('main_page.html')


@app.route('/game/')
def game():
    return render_template('game.html')


@app.route('/Login/', methods=['GET', 'POST'])
def login():
    return render_template('Login.html')


@app.route('/register.html/', methods=['GET', 'POST'])
def register():

    if request.method == 'POST':
        user = User(name=request.form['name'],
                    password=request.form['password'],
                    date_created=datetime.datetime.now())

        try:
            db.session.add(user)
            db.session.commit()

        except:
            print("Error parsing user registration")

        return redirect(url_for('login', users_db=User.query.all()))

    return render_template('register.html')


if __name__ == '__main__':
    app.run(debug=True)
