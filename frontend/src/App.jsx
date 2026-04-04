import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar    from './components/Navbar';
import Home      from './pages/Home';
import AddBook   from './pages/AddBook';
import EditBook  from './pages/EditBook';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight:'100vh', background:'#f9fafb' }}>
        <Navbar/>
        <Routes>
          <Route path="/"        element={<Home/>}/>
          <Route path="/add"     element={<AddBook/>}/>
          <Route path="/edit/:id" element={<EditBook/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}