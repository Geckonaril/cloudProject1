# Cloud Project 1 — Kitap Kütüphanesi

Bu proje Flask (Python) backend ve React (Vite) frontend kullanarak
geliştirilmiş bir RESTful web uygulamasıdır.
AWS EC2, RDS ve S3 üzerinde barındırılmaktadır.

## Canlı Linkler
- 🌐 Frontend: http://cloudproject1-frontend.s3-website.eu-central-1.amazonaws.com
- ⚙️ Backend API: http://18.198.24.112/api/health

## Teknolojiler

### Backend
- Python / Flask
- Flask-SQLAlchemy
- Flask-CORS
- Gunicorn (WSGI server)
- Nginx (reverse proxy)

### Frontend
- React (Vite)
- React Router DOM
- Axios

### Veritabanı
- PostgreSQL (AWS RDS)

### Bulut (AWS)
- EC2 — Flask API sunucusu (Ubuntu 24.04, t3.micro)
- RDS — PostgreSQL veritabanı (db.t4g.micro)
- S3 — React frontend static hosting

## Özellikler
- Kitap ekleme, listeleme, güncelleme, silme (CRUD)
- Tür, yıl, puan bilgisi
- Okundu/okunmadı takibi
- Arama/filtreleme

## Mimari
## Kurulum (Lokal)

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Video
