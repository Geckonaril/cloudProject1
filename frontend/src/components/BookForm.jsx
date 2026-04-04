import { useState } from 'react';

export default function BookForm({ initial = {}, onSubmit, loading }) {
  const [form, setForm] = useState({
    title: '', author: '', genre: '', year: '', isbn: '', read: false, rating: '', ...initial
  });

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = e => { e.preventDefault(); onSubmit(form); };

  const field = (label, name, type='text', extra={}) => (
    <div style={styles.field}>
      <label style={styles.label}>{label}</label>
      <input name={name} type={type} value={form[name]} onChange={handle}
             style={styles.input} {...extra}/>
    </div>
  );

  return (
    <form onSubmit={submit} style={styles.form}>
      {field('Kitap Adı *', 'title', 'text', { required: true, placeholder: 'Örn: Suç ve Ceza' })}
      {field('Yazar *',     'author', 'text', { required: true, placeholder: 'Örn: Dostoyevski' })}
      {field('Tür',         'genre',  'text', { placeholder: 'Roman, Bilim, Tarih...' })}
      {field('Yıl',         'year',   'number', { min:1000, max:2025 })}
      {field('ISBN',        'isbn')}
      {field('Puan (1-5)',  'rating', 'number', { min:1, max:5, step:0.1 })}
      <div style={styles.field}>
        <label style={styles.checkLabel}>
          <input type="checkbox" name="read" checked={form.read} onChange={handle}/>
          &nbsp; Okundu olarak işaretle
        </label>
      </div>
      <button type="submit" style={styles.btn} disabled={loading}>
        {loading ? 'Kaydediliyor...' : 'Kaydet'}
      </button>
    </form>
  );
}

const styles = {
  form:       { display:'flex', flexDirection:'column', gap:'16px', maxWidth:'500px' },
  field:      { display:'flex', flexDirection:'column', gap:'4px' },
  label:      { fontWeight:'500', fontSize:'14px', color:'#374151' },
  input:      { padding:'10px 12px', border:'1px solid #d1d5db', borderRadius:'8px',
                fontSize:'15px', outline:'none' },
  checkLabel: { display:'flex', alignItems:'center', fontSize:'14px', cursor:'pointer' },
  btn:        { padding:'12px', background:'#7c6af7', color:'#fff', border:'none',
                borderRadius:'8px', fontSize:'16px', fontWeight:'600', cursor:'pointer' },
};