import './EditTodoModal.css'
import { Modal } from '../modal/Modal';
import {useForm} from 'react-hook-form';

export function EditTodoModal({ editedTitle, toggleOpen, editTodo }) {
    const { register, handleSubmit, getValues, formState } = useForm({
        defaultValues: {title: editedTitle}
      });
    
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          editTodo(getValues('title'));
          toggleOpen();
        }
    }

    const onSubmit = handleSubmit((data) => {
        editTodo(data.title); 
        toggleOpen()
    })

    const body = (
        <div className='content-wrapper'>
            <input
                type="text"
                className='todo-input'
                {...register("title", {required: true, minLength: 1})}
                onKeyDown={handleKeyDown}
            ></input>

            <div className="btn-wrapper">
                <button
                    className='primary-btn'
                    onClick={onSubmit}
                    disabled={!formState.isValid}
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