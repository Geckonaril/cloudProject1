import { useEffect, useState } from 'react';
import { getBooks } from '../api/books';
import BookCard from '../components/BookCard';

export default function Home() {
  const [books, setBooks]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter]   = useState('');

  useEffect(() => { fetchBooks(); }, []);

  const fetchBooks = async () => {
    setLoading(true);
    const res = await getBooks();
    setBooks(res.data);
    setLoading(false);
  };

  const onDelete = id => setBooks(bs => bs.filter(b => b.id !== id));

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(filter.toLowerCase()) ||
    b.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.topBar}>
        <h1 style={styles.h1}>Kitaplarım <span style={styles.count}>{books.length}</span></h1>
        <input placeholder="Ara..." value={filter} onChange={e => setFilter(e.target.value)}
               style={styles.search}/>
      </div>
      {loading ? <p>Yükleniyor...</p> : (
        filtered.length === 0
          ? <p style={styles.empty}>Henüz kitap yok. Eklemek için + butonuna bas!</p>
          : <div style={styles.grid}>
              {filtered.map(b => <BookCard key={b.id} book={b} onDelete={onDelete}/>)}
            </div>
      )}
    </div>
  );
}

const styles = {
  page:   { padding:'32px', maxWidth:'1100px', margin:'0 auto' },
  topBar: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px' },
  h1:     { margin:0, fontSize:'26px', color:'#1e1e2e' },
  count:  { background:'#ede9fe', color:'#5b21b6', borderRadius:'20px',
            padding:'2px 12px', fontSize:'16px', marginLeft:'8px' },
  search: { padding:'10px 16px', border:'1px solid #d1d5db', borderRadius:'8px',
            fontSize:'15px', width:'240px' },
  grid:   { display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'20px' },
  empty:  { color:'#9ca3af', fontSize:'16px' },
};