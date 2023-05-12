import { useState, useEffect } from 'react';
import './TodoDashboard.css';
import { TodoList } from '../TodoList/TodoList';

export function TodoDashboard() {
  const TODOS_KEY = 'todos';
  const LSTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) ?? [];
  const [todos, setTodos] = useState(LSTodos)

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  })

  return (
    <div className='page'>
      <header>
        <h1>To Do List</h1>
      </header>

      <div className='wrapper'>
        <TodoList
          todos={todos}
          setTodos={(newTodos) => setTodos(newTodos)}></TodoList>
      </div>

      <footer>
        Powered by React
      </footer>
    </div>
  );
}
