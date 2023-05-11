import './FormTodoModal.css'
import { Modal } from '../Modal/Modal';
import { useForm } from 'react-hook-form';

export function FormTodoModal({ editedTitle, toggleOpen, editTodo }) {
    const { register, handleSubmit, getValues, formState } = useForm({
        defaultValues: { title: editedTitle ?? '' }
    });

    let modalTitle = editedTitle?.trim()?.length
        ? 'Edit Todo Item'
        : 'Add Todo Item';

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

    return (
        <Modal modalTitle={modalTitle}
            toggleOpen={toggleOpen}
            content={
                <div className='form-wrapper'>
                    <input
                        type="text"
                        className='todo-input'
                        {...register("title", { required: true, minLength: 1 })}
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
            }
        ></Modal>
    )
}