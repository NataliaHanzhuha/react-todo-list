import { useState } from 'react';
import { DeleteTodoModal } from '../../modals/DeleteTodoModal/DeleteTodoModal';
import './TodoItem.css';
import { FormTodoModal } from '../../modals/FormTodoModal/FormTodoModal';


export function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
    const checkedClass = todo.checked ? 'checked' : '';
    const [isDeleteModalOpen, toggleDeleteModalOpen] = useState(false)
    const [isEditModalOpen, toggleEditModalOpen] = useState(false)
    const [isDescriptionOpen, toggleDescriptionOpen] = useState(false)

    return (
        <>
            <div className='todo-item'>
                <div class='todo-item-title'>
                    <input type="checkbox"
                        value={todo.checked}
                        checked={todo.checked}
                        onChange={toggleTodo}></input>
                    <div onClick={() => toggleDescriptionOpen(!isDescriptionOpen)}
                        className={`title ${checkedClass}`}>
                        {`${todo.title}`}
                    </div>
                    <div className="btn-wrapper">
                        <button onClick={() => toggleEditModalOpen(true)}
                            className="btn primary-btn"
                            disabled={todo.checked}
                        >Edit</button>
                        <button onClick={() => toggleDeleteModalOpen(true)}
                            className="btn danger-btn"
                        >Delete</button>
                    </div>
                </div>

                {isDescriptionOpen
                    && <div className='todo-description'
                        onClick={() => toggleDescriptionOpen(!isDescriptionOpen)}>
                        {todo?.description ?? 'No description yet ...'}
                    </div>
                }

            </div>

            {isDeleteModalOpen && <DeleteTodoModal
                toggleOpen={() => toggleDeleteModalOpen(false)}
                title={todo.title}
                deleteTodo={deleteTodo}
            />}

            {isEditModalOpen && <FormTodoModal
                toggleOpen={() => toggleEditModalOpen(false)}
                todo={todo}
                editTodo={(todo) => editTodo(todo)}
            ></FormTodoModal>}
        </>
    )
}