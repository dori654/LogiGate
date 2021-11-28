from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    complete = db.Column(db.Boolean)
    date_created = db.Column(db.DateTime)

    def __repr__(self):
        return '<Todo %r>' % self.id


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        return 'post blaiat'

    if request.method == 'GET':
        pass
    return render_template('main_page.html')


if __name__ == '__main__':
    app.run(debug=True)
