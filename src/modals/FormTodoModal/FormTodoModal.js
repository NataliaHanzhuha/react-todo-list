import './FormTodoModal.css'
import { Modal } from '../Modal/Modal';
import { useForm } from 'react-hook-form';

export function FormTodoModal({ todo, toggleOpen, editTodo }) {
    const { register, handleSubmit, getValues, formState } = useForm({
        defaultValues:
        {
            title: todo?.title ?? '',
            description: todo?.description ?? ''
        }
    });

    let modalTitle = todo?.title?.trim()?.length
        ? 'Edit Todo Item'
        : 'Add Todo Item';

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            editTodo(getValues());
            toggleOpen();
        }
    }

    const onSubmit = handleSubmit((data) => {
        editTodo(data);
        toggleOpen()
    })

    return (
        <Modal modalTitle={modalTitle}
            toggleOpen={toggleOpen}
            content={
                <div className='form-wrapper'>
                    <label>Title</label>
                    
                    <input
                        type="text"
                        className='todo-input'
                        {...register("title", { required: true, minLength: 1 })}
                        onKeyDown={handleKeyDown}
                    ></input>

                    <label>Description</label>

                    <textarea rows={5}
                        className='todo-input'
                        {...register('description')}></textarea>

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
            }
        ></Modal>
    )
}