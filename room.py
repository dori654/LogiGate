from main import db, app,request, User

class Room(db.Model):
    __tablename__ = 'rooms'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(256))
    users = db.Column(db.String(256))

    def __repr__(self):
        return '<Room %r>' % (self.name)

@app.route('/newroom')
def newroom():
    description = request.form['description']
    room = Room(name='testroom', description=description)
    db.session.add(room)
    db.session.commit()
    return 'new room created'

@app.route('/assign/<int:id>/<int:id>')
def assign(id):
    room = Room.query.get_or_404(id)
    student = User.quuery.get_or_404(id)
    room.users += student.name
    return 'assigned'



