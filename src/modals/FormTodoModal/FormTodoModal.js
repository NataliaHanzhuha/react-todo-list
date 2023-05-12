import { Modal } from '../Modal';
import './FormTodoModal.css'
import { useForm } from 'react-hook-form';

const FormTodoModal = ({ todo, toggleOpen, editTodo }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues:
    {
      title: todo?.title ?? '',
      description: todo?.description ?? '',
      expirationDate: todo?.expirationDate ?? null
    }
  });

  const modalTitle = todo?.title?.trim()?.length
    ? 'Edit Todo Item'
    : 'Add Todo Item';

  const onSubmit = handleSubmit((data) => {
    editTodo(data);
    toggleOpen()
  })

  return (
    <Modal modalTitle={modalTitle}
      toggleOpen={toggleOpen}>
      <div className='form-wrapper'>
        <label>Title</label>

        <input
          type="text"
          className='todo-input'
          {...register("title", { required: true, minLength: 1 })}
        />

        <label>Description</label>

        <textarea rows={5}
          className='todo-input'
          {...register('description')}/>

        <label>Expiration Date</label>

        <input className='todo-input'
          type="date"
          {...register('expirationDate')}
        />

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
    </Modal>
  )
}

export default FormTodoModal;