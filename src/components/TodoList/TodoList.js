import { TodoItem } from '../todo-item/TodoItem';

export function TodoList({ isDone, title, todos, setTodos }) {
    function deleteTask(index) {
        const newTodos = todos.filter((todo, i) => i !== index);

        setTodos(newTodos);
    }

    function toggleTodo(title) {
        const newTodos = todos.map((todo) => {
            if (todo.title === title) {
                todo.checked = !todo.checked;
            }
            return todo;
        });

        setTodos(newTodos);
    }
    const filteredList = todos?.filter((todo) => todo.checked === isDone)


    return <div className='list-wrapper'>
        <h2>{title}</h2>
        {
            filteredList?.length
                ? <ul>
                    {filteredList?.map((todo, index) =>
                        <TodoItem
                            todo={todo}
                            key={index}
                            deleteTodo={() => deleteTask(index)}
                            toggleTodo={() => toggleTodo(todo.title)}
                        />)}
                </ul>
                : <p className='gray'>Emply list yet</p>
        }
    </div>
}