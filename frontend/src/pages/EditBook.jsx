import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBook, updateBook } from '../api/books';
import BookForm from '../components/BookForm';

export default function EditBook() {
  const { id }        = useParams();
  const navigate      = useNavigate();
  const [book, setBook]     = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBook(id).then(res => setBook(res.data));
  }, [id]);

  const handleSubmit = async (form) => {
    setLoading(true);
    await updateBook(id, { ...form, year: form.year || null, rating: form.rating || null });
    navigate('/');
  };

  if (!book) return <p style={{ padding:'32px' }}>Yükleniyor...</p>;

  return (
    <div style={{ padding:'32px', maxWidth:'600px', margin:'0 auto' }}>
      <h2>Kitabı Düzenle</h2>
      <BookForm initial={book} onSubmit={handleSubmit} loading={loading}/>
    </div>
  );
}