import { useState } from "react"


export function NewTodoForm({addTodo}) {
    const [isNewItem, setNewItem] = useState(false)
    const [title, setTitle] = useState('');

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
          addTodo();
          cancelNewItem();
        }
      }

      function cancelNewItem() {
        setTitle('');
        setNewItem(false);
      }
    
    return (
        <>
        {
         isNewItem
              ? <div className='add-item-wrapper' >
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {setTitle(e.target.value); cancelNewItem()}}
                  onKeyDown={handleKeyDown}
                ></input>
                <button
                  className='save-btn'
                  onClick={addTodo}
                  disabled={!title.trim().length}
                >Save</button>
                <button
                  className='cancel-btn'
                  onClick={cancelNewItem}
                >Cancel</button>
              </div>
              : <button
                className="add-btn"
                onClick={() => setNewItem(true)}>
                Add Todo Item
              </button>
          }
          </>
    )
}