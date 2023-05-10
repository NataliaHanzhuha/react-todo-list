import { useState } from 'react';
import { AddTodoModal } from '../../modals/AddTodoModal/AddTodoModal';

export function NewTodoForm({ addTodo }) {
  const [isAddModalOpen, toggleAddModalOpen] = useState(false)

  return (
    <>
      <button
        className="add-btn"
        onClick={() => toggleAddModalOpen(true)}>
        Add Todo Item
      </button>
      {isAddModalOpen && <AddTodoModal 
      toggleOpen={() => toggleAddModalOpen(false)}
      addTodo={(title) => addTodo(title)}
      ></AddTodoModal>}
    </>
  )
}