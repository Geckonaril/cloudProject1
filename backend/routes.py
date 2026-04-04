from flask import Blueprint, request, jsonify
from models import db, Book

books_bp = Blueprint('books', __name__)

# Tüm kitapları getir
@books_bp.route('/books', methods=['GET'])
def get_books():
    genre  = request.args.get('genre')
    read   = request.args.get('read')
    query  = Book.query

    if genre:
        query = query.filter_by(genre=genre)
    if read is not None:
        query = query.filter_by(read=(read.lower() == 'true'))

    books = query.order_by(Book.created_at.desc()).all()
    return jsonify([b.to_dict() for b in books]), 200

# Tek kitap getir
@books_bp.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = Book.query.get_or_404(book_id)
    return jsonify(book.to_dict()), 200

# Yeni kitap ekle
@books_bp.route('/books', methods=['POST'])
def create_book():
    data = request.get_json()
    if not data or not data.get('title') or not data.get('author'):
        return jsonify({'error': 'Başlık ve yazar zorunludur'}), 400

    book = Book(
        title=data['title'],
        author=data['author'],
        genre=data.get('genre'),
        year=data.get('year'),
        isbn=data.get('isbn'),
        read=data.get('read', False),
        rating=data.get('rating')
    )
    db.session.add(book)
    db.session.commit()
    return jsonify(book.to_dict()), 201

# Kitap güncelle
@books_bp.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = Book.query.get_or_404(book_id)
    data = request.get_json()

    book.title  = data.get('title', book.title)
    book.author = data.get('author', book.author)
    book.genre  = data.get('genre', book.genre)
    book.year   = data.get('year', book.year)
    book.isbn   = data.get('isbn', book.isbn)
    book.read   = data.get('read', book.read)
    book.rating = data.get('rating', book.rating)

    db.session.commit()
    return jsonify(book.to_dict()), 200

# Kitap sil
@books_bp.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    book = Book.query.get_or_404(book_id)
    db.session.delete(book)
    db.session.commit()
    return jsonify({'message': 'Kitap silindi'}), 200

# Sağlık kontrolü
@books_bp.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200