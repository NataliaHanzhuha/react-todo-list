import { useState } from 'react';
import './TodoItem.css';
import { DeleteTodoModal } from '../../modals/DeleteTodoModal/DeleteTodoModal';
import { FormTodoModal } from '../../modals/FormTodoModal/FormTodoModal';

export function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
    const checkedClass = todo.checked ? 'checked' : '';
    const [isDeleteModalOpen, toggleDeleteModalOpen] = useState(false)
    const [isEditModalOpen, toggleEditModalOpen] = useState(false)
    const [isDescriptionOpen, toggleDescriptionOpen] = useState(false)

    const textColor = () => {
        if (!todo.expirationDate) {
            return 'black'
        }

        const expDate = new Date(todo.expirationDate);
        const today = new Date(Date.now())
        const diffDate = expDate.getTime() - today.getTime();

        if (diffDate > 0) {
            if (diffDate >= 1000*60*60*24) {
                return 'black'
            }

            return 'orange'
        }

        return 'red'
    }

    return (
        <>
            <div className='todo-item'>
                <div className='todo-item-title'>
                    <input type="checkbox"
                        value={todo.checked}
                        checked={todo.checked}
                        onChange={toggleTodo}></input>
                    <div onClick={() => toggleDescriptionOpen(!isDescriptionOpen)}
                        className={`title ${checkedClass}`}
                        style={{color: textColor()}}>
                        {todo.title}
                    </div>
                    <div style={{color: textColor()}}>{todo?.expirationDate}</div>
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