import './AddTodoModal.css'
import { Modal } from '../modal/Modal';
import { useEffect, useState } from 'react';

export function AddTodoModal({ isOpen, toggleOpen, addTodo }) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        setTitle('');
    }, [isOpen])
    
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          addTodo(title);
          toggleOpen()
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
                    onClick={() => {addTodo(title); toggleOpen()}}
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
        <Modal isOpen={isOpen}
            modalTitle='Add Todo'
            toggleOpen={toggleOpen}
            content={body}></Modal>
    )
}