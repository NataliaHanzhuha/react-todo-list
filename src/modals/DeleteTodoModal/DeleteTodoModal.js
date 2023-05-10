import { Modal } from '../Modal/Modal';
import './DeleteTodoModal.css';

export function DeleteTodoModal({title, toggleOpen, deleteTodo }) {
    const body = (
        <div className='content-wrapper'>
            <p>
                Are you sure you want remove todo
                <b> {title}</b>
                ?
            </p>

            <div className="btn-wrapper">
                <button className='danger-btn'
                    onClick={() => {deleteTodo(); toggleOpen()}}>Yes</button>
                <button className='default-btn'
                    onClick={toggleOpen}>No</button>
            </div>
        </div>
    )
    return (
        <Modal modalTitle='Delete Todo'
            toggleOpen={toggleOpen}
            content={body}></Modal>
    )
}