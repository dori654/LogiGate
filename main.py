from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__, static_url_path="")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/database.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    last = db.Column(db.String(80))
    password = db.Column(db.String(80))
    date_created = db.Column(db.DateTime)
    user_type = db.Column(db.String(80))
    email = db.Column(db.String(80))
    address = db.Column(db.String(80))

    def __repr__(self):
        return '<User %r>' % self.id


@app.route('/', methods=['GET', 'POST'])
def main():
    if request.method == 'POST':
        return 'post blaiat'

    if request.method == 'GET':
        pass
    return render_template('main_page.html')


@app.route('/add', methods=['POST'])
def user():
    name = request.form['name']
    password = request.form['password']
    last = request.form['last']
    email = request.form['email']
    address = request.form['address']
    user_type = str(request.form['account_type'])
    user = User(name=name, password=password,
                last=last, email=email,
                address=address, user_type=user_type)

    db.session.add(user)
    db.session.commit()
    return redirect('/')


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    fname = request.form['name']
    fpassword = request.form['password']
    user = User.query.filter_by(name=fname, password=fpassword).first()
    if user:
        if user.user_type == 'student':
            return render_template('/dashboard3.html')
        if user.user_type == 'teacher':
            return render_template('/dashboard2.html')
        if user.user_type == 'director':
            return render_template('/dashboard1.html', users_db=User.query.all())
    else:
        return redirect('Bad Username')


@app.route('/game/')
def game():
    return render_template('game.html')


@app.route('/delete/<int:id>')
def erase(id):
    data = User.query.get(id)
    db.session.delete(data)
    db.session.commit()
    return redirect('/Login')


@app.route('/Login/', methods=['GET', 'POST'])
def login():
    users_db = User.query.all()
    return render_template('Login.html', users_db=users_db)


@app.route('/register.html/', methods=['GET', 'POST'])
def register():
    return render_template('register.html')


if __name__ == '__main__':
    app.run(debug=True)
