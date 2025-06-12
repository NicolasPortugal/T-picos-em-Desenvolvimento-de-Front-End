import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  function handleComplete(index) {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  }

  function handleDelete(index) {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <strong style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.title}
          </strong>
          <p>{task.description}</p>
          <button onClick={() => handleComplete(index)}>
            {task.done ? 'Desfazer' : 'Concluir'}
          </button>
          <button onClick={() => handleDelete(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
