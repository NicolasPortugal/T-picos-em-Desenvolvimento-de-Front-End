import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title, description, done: false };
    const existing = JSON.parse(localStorage.getItem('tasks')) || [];
    existing.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(existing));
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        required
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default AddTask;
