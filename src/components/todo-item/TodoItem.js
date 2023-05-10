import './TodoItem.css';

export function TodoItem({ todo, deleteTodo, toggleTodo }) {
    const checkedClass = todo.checked ? 'checked' : ''

    return (
        <li className={`todo-item ${checkedClass}`}>
            <input type="checkbox"
                value={todo.checked}
                checked={todo.checked}
                onChange={toggleTodo}></input>
            <span className='title'>{`${todo.title}`}</span>
            <div>
                <button onClick={deleteTodo} className="delete-btn">Delete</button>
            </div>
        </li>
    )
}