import React, { useEffect, useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    if (!task) return;
    setTodos(prev => [...prev, { id: Date.now(), title: task, completed: false }]);
    setTask('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="New task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
