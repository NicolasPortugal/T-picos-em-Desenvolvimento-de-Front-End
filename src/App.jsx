import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#ddd' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/add">Adicionar Tarefa</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
