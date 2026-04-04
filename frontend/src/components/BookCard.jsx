import { useNavigate } from 'react-router-dom';
import { deleteBook } from '../api/books';

export default function BookCard({ book, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm('Kitabı silmek istediğine emin misin?')) return;
    await deleteBook(book.id);
    onDelete(book.id);
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.genre}>{book.genre || 'Genel'}</span>
        {book.read && <span style={styles.readBadge}>✓ Okundu</span>}
      </div>
      <h3 style={styles.title}>{book.title}</h3>
      <p style={styles.author}>{book.author}</p>
      <div style={styles.meta}>
        {book.year && <span>{book.year}</span>}
        {book.rating && <span>⭐ {book.rating}/5</span>}
      </div>
      <div style={styles.actions}>
        <button onClick={() => navigate(`/edit/${book.id}`)} style={styles.editBtn}>Düzenle</button>
        <button onClick={handleDelete} style={styles.deleteBtn}>Sil</button>
      </div>
    </div>
  );
}

const styles = {
  card:       { background:'#fff', borderRadius:'12px', padding:'20px',
                boxShadow:'0 2px 8px rgba(0,0,0,0.08)', display:'flex',
                flexDirection:'column', gap:'8px' },
  header:     { display:'flex', justifyContent:'space-between' },
  genre:      { background:'#ede9fe', color:'#5b21b6', padding:'2px 10px',
                borderRadius:'20px', fontSize:'12px', fontWeight:'500' },
  readBadge:  { background:'#d1fae5', color:'#065f46', padding:'2px 10px',
                borderRadius:'20px', fontSize:'12px', fontWeight:'500' },
  title:      { margin:0, fontSize:'17px', fontWeight:'600', color:'#1e1e2e' },
  author:     { margin:0, color:'#6b7280', fontSize:'14px' },
  meta:       { display:'flex', gap:'12px', fontSize:'13px', color:'#9ca3af' },
  actions:    { display:'flex', gap:'8px', marginTop:'8px' },
  editBtn:    { flex:1, padding:'7px', background:'#f3f4f6', border:'none',
                borderRadius:'8px', cursor:'pointer', fontWeight:'500' },
  deleteBtn:  { flex:1, padding:'7px', background:'#fee2e2', color:'#b91c1c',
                border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:'500' },
};