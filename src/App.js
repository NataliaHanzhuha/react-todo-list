import { useState } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';

function App() {
  let [todos, setTodos] = useState([
    {
      title: 'task1',
      checked: false
    },
    {
      title: 'task2',
      checked: false
    },
    {
      title: 'task3',
      checked: false
    },
  ])
  const [isNewItem, setNewItem] = useState(false)
  const [title, setTitle] = useState('');

  function deleteTask(index) {
    const newTodos = todos.filter((todo, i) => i !== index);

    setTodos(newTodos);
  }

  function toggleTodo(title) {
    const newTodos = todos.map((todo) => {
      if (todo.title === title) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  function addTodo() {
    const newItem = {
      title,
      checked: false
    }
    setTodos([newItem, ...todos]);
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
