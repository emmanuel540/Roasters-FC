from datetime import datetime
from extensions import db

class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(30), nullable=True)
    message = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, name, email, message, phone=None, timestamp=None):
        self.name = name
        self.email = email
        self.message = message
        self.phone = phone
        if timestamp:
            self.timestamp = timestamp

class Registration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(30), nullable=True)
    team = db.Column(db.String(50), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, name, email, team, phone=None, timestamp=None):
        self.name = name
        self.email = email
        self.team = team
        self.phone = phone
        if timestamp:
            self.timestamp = timestamp

class Donation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    support_type = db.Column(db.String(100), nullable=False)
    message = db.Column(db.Text, nullable=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, name, email, support_type, message=None, timestamp=None):
        self.name = name
        self.email = email
        self.support_type = support_type
        self.message = message
        if timestamp:
            self.timestamp = timestamp

class Fixture(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    opponent = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(100), nullable=False)
    time = db.Column(db.String(50), nullable=False)
    match_type = db.Column(db.String(50), nullable=False)  # 'Upcoming' or 'Result'
    status = db.Column(db.String(50), nullable=False)      # 'Scheduled' or result e.g. 'Won 2-1'

    def __init__(self, opponent, date, time, match_type, status):
        self.opponent = opponent
        self.date = date
        self.time = time
        self.match_type = match_type
        self.status = status

class Coach(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(100), nullable=False)
    experience = db.Column(db.Text, nullable=False)
    object_position = db.Column(db.String(50), nullable=True)

    def __init__(self, name, role, experience, object_position=None):
        self.name = name
        self.role = role
        self.experience = experience
        self.object_position = object_position

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cat_id = db.Column(db.String(50), unique=True, nullable=False)  # 'senior', 'u13', 'u9'
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    players = db.relationship('Player', backref='category', lazy=True, cascade="all, delete-orphan")

    def __init__(self, cat_id, title, description):
        self.cat_id = cat_id
        self.title = title
        self.description = description

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    number = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
    category_cat_id = db.Column(db.String(50), db.ForeignKey('category.cat_id'), nullable=False)

    def __init__(self, name, position, number, description, category_cat_id):
        self.name = name
        self.position = position
        self.number = number
        self.description = description
        self.category_cat_id = category_cat_id

class Program(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prog_id = db.Column(db.String(50), unique=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)

    def __init__(self, prog_id, title, description):
        self.prog_id = prog_id
        self.title = title
        self.description = description

class FAQ(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.Text, nullable=False)

    def __init__(self, question, answer):
        self.question = question
        self.answer = answer

class GalleryItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    media_type = db.Column(db.String(50), nullable=False)  # 'Photo' or 'Video'
    caption = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(255), nullable=False)

    def __init__(self, title, media_type, caption, image_url):
        self.title = title
        self.media_type = media_type
        self.caption = caption
        self.image_url = image_url
