import { useState } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';

function App() {
  const TODOS_KEY = 'todos';
  const [todos, setTodos] = useState(savedTodos())
  const [isNewItem, setNewItem] = useState(false)
  const [title, setTitle] = useState('');

  function savedTodos() {
    const savedTodosList = localStorage.getItem(TODOS_KEY);
    const list = JSON.parse(savedTodosList);

    return list ?? [];
  }
  
  function deleteTask(index) {
    const newTodos = todos.filter((todo, i) => i !== index);

    saveTodos(newTodos);
  }

  function toggleTodo(title) {
    const newTodos = todos.map((todo) => {
      if (todo.title === title) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    saveTodos(newTodos);
  }

  function addTodo() {
    const newItem = {
      title,
      checked: false
    }
    saveTodos([newItem, ...todos]);
    cancelNewItem();
  }

  function cancelNewItem() {
    setTitle('');
    setNewItem(false);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  function saveTodos(newTodos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
    setTodos(newTodos);
  }


  const todoList = (isDone, title) => {
    const filteredList = todos.filter((todo) => todo.checked === isDone)
    const list = <ul>
      {filteredList.map((todo, index) =>
        <TodoItem
          todo={todo}
          key={index}
          deleteTodo={() => deleteTask(index)}
          toggleTodo={() => toggleTodo(todo.title)}
        />)}
    </ul>
    return <>
      <h2>{title}</h2>
      {
        filteredList.length
          ? list
          : <p className='gray'>Emply list yet</p>

      }
    </>
  }

  const addNewTodoTemplate = () => {
    return isNewItem
      ? <div className='add-item-wrapper' >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <button
          className='save-btn'
          onClick={addTodo}
          disabled={!title.trim().length}
        >Save</button>
        <button
          className='cancel-btn'
          onClick={cancelNewItem}
        >Cancel</button>
      </div>
      : <button
        className="add-btn"
        onClick={() => setNewItem(true)}>
        Add Todo Item
      </button>
  }

  return (
    <div className='page'>
      <header>
        <h1>To Do List</h1>
      </header>

      {addNewTodoTemplate()}

      <div className='wrapper'>

        <div className='list-wrapper'>
          {todoList(false, 'In Progress')}
        </div>

        <div className='list-wrapper'>
          {todoList(true, 'Done')}
        </div>
      </div>

      <footer>
        Powered by React
      </footer>
    </div>
  );
}

export default App;
