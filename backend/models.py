from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Book(db.Model):
    __tablename__ = 'books'

    id        = db.Column(db.Integer, primary_key=True)
    title     = db.Column(db.String(200), nullable=False)
    author    = db.Column(db.String(150), nullable=False)
    genre     = db.Column(db.String(100))
    year      = db.Column(db.Integer)
    isbn      = db.Column(db.String(20), unique=True)
    read      = db.Column(db.Boolean, default=False)
    rating    = db.Column(db.Float)          # 1.0 - 5.0
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id':         self.id,
            'title':      self.title,
            'author':     self.author,
            'genre':      self.genre,
            'year':       self.year,
            'isbn':       self.isbn,
            'read':       self.read,
            'rating':     self.rating,
            'created_at': self.created_at.isoformat()
        }