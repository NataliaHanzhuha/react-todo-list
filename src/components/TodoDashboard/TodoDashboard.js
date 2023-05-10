import { useState, useEffect } from 'react';
import './TodoDashboard.css';
import { NewTodoForm } from '../NewTodoForm/NewTodoForm';
import { TodoList } from '../TodoList/TodoList';

export function TodoDashboard() {
  const TODOS_KEY = 'todos';
  const LSTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) ?? [];
  const [todos, setTodos] = useState(LSTodos)

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  })

  function addTodo(title) {
    const newItem = {
      title,
      checked: false
    }
    setTodos([newItem, ...todos]);
  }

  return (
    <div className='page'>
      <header>
        <h1>To Do List</h1>
      </header>

      <NewTodoForm addTodo={(title) => addTodo(title)}></NewTodoForm>

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
