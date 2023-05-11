import { useState } from 'react';
import { FormTodoModal } from '../../modals/FormTodoModal/FormTodoModal';

export function NewTodoForm({ addTodo }) {
  const [isAddModalOpen, toggleAddModalOpen] = useState(false)

  return (
    <>
      <button
        className="add-btn"
        onClick={() => toggleAddModalOpen(true)}>
        Add Todo Item
      </button>
      {isAddModalOpen && <FormTodoModal
        toggleOpen={() => toggleAddModalOpen(false)}
        editTodo={(title) => addTodo(title)}
      ></FormTodoModal>}
    </>
  )
}