import './AddTodoModal.css'
import { Modal } from '../modal/Modal';
import { useForm } from "react-hook-form";

export function AddTodoModal({ isOpen, toggleOpen, addTodo }) {
    const { register, handleSubmit, getValues, formState } = useForm({
        defaultValues: {title: ''}
      });

    const onSubmit = handleSubmit((data) => {
        addTodo(data.title); 
        toggleOpen()
    })
    
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          addTodo(getValues('title'));
          toggleOpen()
        }
      }

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
                    onClick={handleSubmit(onSubmit)}
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
        <Modal isOpen={isOpen}
            modalTitle='Add Todo'
            toggleOpen={toggleOpen}
            content={body}></Modal>
    )
}