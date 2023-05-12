import { TodoItem } from '../TodoItem/TodoItem';
import { NewTodoForm } from '../NewTodoForm/NewTodoForm';

export function TodoList({ todos, setTodos }) {
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

    function editTodo(index, newTodo) {
        const newTodos = todos.map((todo, i) => {
            if (index === i) {
                todo = { ...todo, ...newTodo };
            }

            return todo;
        });

        setTodos(newTodos);
    }


    function addTodo(todo) {
        const newItem = {
            checked: false,
            ...todo
        }
        setTodos([newItem, ...todos]);
    }

    return <div className='list-wrapper'>
        <NewTodoForm addTodo={(todo) => addTodo(todo)}></NewTodoForm>
        {
            todos?.length
                ? (todos.sort((a, b) => a.checked < b.checked ? -1 : 1)
                    ?.map((todo, index) =>
                        <TodoItem
                            todo={todo}
                            key={index}
                            deleteTodo={() => deleteTask(index)}
                            toggleTodo={() => toggleTodo(todo.title)}
                            editTodo={(todo) => editTodo(index, todo)}
                        />))
                : <p className='gray center'>Emply list yet...</p>
        }
    </div>
}