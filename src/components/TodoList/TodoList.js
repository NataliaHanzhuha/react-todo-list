import { TodoItem } from '../TodoItem/TodoItem';

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

    function editTodo(index, title) {
        const newTodos = todos.map((todo, i) => {
            if (index === i) {
                todo.title = title;
            }
            return todo;
        });

        setTodos(newTodos);
    }

    return <div className='list-wrapper'>
        {
            todos?.length
                ? <ul>
                    {todos
                    ?.sort((a,b) => a.checked < b.checked ? -1 : 1)
                    ?.map((todo, index) =>
                        <TodoItem
                            todo={todo}
                            key={index}
                            deleteTodo={() => deleteTask(index)}
                            toggleTodo={() => toggleTodo(todo.title)}
                            editTodo={(title) => editTodo(index, title)}
                        />)}
                </ul>
                : <p className='gray center'>Emply list yet...</p>
        }
    </div>
}