import { useState } from 'react';
import { DeleteTodoModal } from '../../modals/DeleteTodoModal/DeleteTodoModal';
import './TodoItem.css';
import { EditTodoModal } from '../../modals/EditTodoModal/EditTodoModal';


export function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
    const checkedClass = todo.checked ? 'checked' : '';
    const [isDeleteModalOpen, toggleDeleteModalOpen] = useState(false)
    const [isEditModalOpen, toggleEditModalOpen] = useState(false)

    return (
        <>
            <li className='todo-item'>
                <input type="checkbox"
                    value={todo.checked}
                    checked={todo.checked}
                    onChange={toggleTodo}></input>
                <span className={`title ${checkedClass}`}>{`${todo.title}`}</span>
                <div className="btn-wrapper">
                    <button onClick={() => toggleEditModalOpen(true)}
                        className="btn primary-btn"
                        disabled={todo.checked}
                    >Edit</button>
                    <button onClick={() => toggleDeleteModalOpen(true)}
                        className="btn danger-btn"
                    >Delete</button>
                </div>
            </li>

            {isDeleteModalOpen && <DeleteTodoModal
                toggleOpen={() => toggleDeleteModalOpen(false)}
                title={todo.title}
                deleteTodo={deleteTodo}
            />}

            {isEditModalOpen && <EditTodoModal
                toggleOpen={() => toggleEditModalOpen(false)}
                editedTitle={todo.title}
                editTodo={(title) => editTodo(title)}
            ></EditTodoModal>}
        </>
    )
}