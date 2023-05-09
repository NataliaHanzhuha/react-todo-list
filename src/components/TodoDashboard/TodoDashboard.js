import { useState, useEffect } from 'react';
import './TodoDashboard.css';
import { TodoList } from '../TodoList/TodoList';
import { AddTodoModal } from '../../modals/add-todo-modal/AddTodoModal';

export function TodoDashboard() {
  const TODOS_KEY = 'todos';
  const LSTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) ?? [];
  const [todos, setTodos] = useState(LSTodos)
  const [isOpen, toggleOpen] = useState(false)

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

      <button
        className="add-btn"
        onClick={() => toggleOpen(true)}>
        Add Todo Item
      </button>

      {isOpen && <AddTodoModal
        isOpen={isOpen}
        toggleOpen={() => toggleOpen(false)}
        addTodo={(title) => addTodo(title)}></AddTodoModal>}

      <div className='wrapper'>

        <TodoList
          todos={todos}
          setTodos={(newTodos) => { setTodos(newTodos) }}></TodoList>

      </div>

      <footer>
        Powered by React
      </footer>
    </div>
  );
}
