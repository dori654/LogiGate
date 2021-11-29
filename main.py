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
        return '<User %r>' % (self.id)

class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))

    def __repr__(self):
        return '<Activity %r>' % (self.id)


@app.route('/activity', methods=['GET','POST'])
def new_activity():
    name = request.form['act']
    act = Activity(name=name)
    db.session.add(act)
    db.session.commit()
    return "Added Activity"


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
            return render_template('/dashboard2.html', rooms=Room.query.all(), activity = Activity.query.all())
        if user.user_type == 'director':
            return render_template('/dashboard1.html', users_db=User.query.all())
    else:
        return render_template('Bad Username')


@app.route('/game/')
def game():
    return render_template('game.html')


@app.route('/delete/<int:id>')
def erase(id):
    data = User.query.get(id)
    db.session.delete(data)
    db.session.commit()
    return redirect('/dashboard3.html')


@app.route('/deleter/<int:id>')
def eraser(id):
    data = Room.query.get(id)
    db.session.delete(data)
    db.session.commit()
    return redirect('/dashboard2.html')


@app.route('/Login/', methods=['GET', 'POST'])
def login():
    return render_template('Login.html')


@app.route('/register.html/', methods=['GET', 'POST'])
def register():
    return render_template('register.html')


class Room(db.Model):
    __tablename__ = 'rooms'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(256))
    name = db.Column(db.String(80))
    users = db.Column(db.String(256))

    def __repr__(self):
        return '<Room %r>' % (self.name)


@app.route('/newroom', methods=['POST'])
def newroom():
    description = request.form['description']
    type = request.form['name']
    room = Room(name=type, description=description, users='')
    db.session.add(room)
    db.session.commit()
    return 'new room created'


@app.route('/assign/<int:rid>/<int:id>')
def assign(rid, id):
    room = Room.query.get_or_404(rid)
    student = User.query.get_or_404(id)
    room.users += ', ' + student.name
    return 'assigned'


@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    data = User.query.get(id)
    if request.method == "POST":
        data.name = request.form['name']
        try:
            db.session.commit()
            return redirect('/dashboard1.html')
        except:
            return "There was a problem updating that user"
    else:
        return render_template('Bad Username')
    return redirect('/dashboard3.html')


if __name__ == '__main__':
    app.run(debug=True)


