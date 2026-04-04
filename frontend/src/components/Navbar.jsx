import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>📚 Kitap Kütüphanesi</Link>
      <Link to="/add" style={styles.btn}>+ Kitap Ekle</Link>
    </nav>
  );
}

const styles = {
  nav:   { display:'flex', justifyContent:'space-between', alignItems:'center',
            padding:'12px 32px', background:'#1e1e2e', color:'#fff' },
  brand: { color:'#fff', textDecoration:'none', fontSize:'20px', fontWeight:'600' },
  btn:   { background:'#7c6af7', color:'#fff', padding:'8px 18px',
            borderRadius:'8px', textDecoration:'none', fontWeight:'500' },
};