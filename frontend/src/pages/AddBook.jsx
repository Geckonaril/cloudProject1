import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../api/books';
import BookForm from '../components/BookForm';

export default function AddBook() {
  const navigate      = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (form) => {
    setLoading(true);
    await createBook({ ...form, year: form.year || null, rating: form.rating || null });
    navigate('/');
  };

  return (
    <div style={{ padding:'32px', maxWidth:'600px', margin:'0 auto' }}>
      <h2>Yeni Kitap Ekle</h2>
      <BookForm onSubmit={handleSubmit} loading={loading}/>
    </div>
  );
}