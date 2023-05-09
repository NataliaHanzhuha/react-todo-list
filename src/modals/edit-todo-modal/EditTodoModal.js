import './EditTodoModal.css'
import { Modal } from '../modal/Modal';
import { useEffect, useState } from 'react';

export function EditTodoModal({ editedTitle, toggleOpen, editTodo }) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('');
    }, [])

    useEffect(() => {
        setTitle(editedTitle);
    }, [editedTitle]);
    
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          editTodo(title);
          toggleOpen();
        }
    }

    const body = (
        <div className='content-wrapper'>
            <input
                type="text"
                className='todo-input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            ></input>

            <div className="btn-wrapper">
                <button
                    className='primary-btn'
                    onClick={() => {editTodo(title); toggleOpen()}}
                    disabled={!title.trim().length}
                >Save</button>
                <button
                    className='cancel-btn'
                    onClick={toggleOpen}
                >Cancel</button>
    
            </div>
        </div>
    )
    return (
        <Modal modalTitle='Edit Todo'
            toggleOpen={toggleOpen}
            content={body}></Modal>
    )
}