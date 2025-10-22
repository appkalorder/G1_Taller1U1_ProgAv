import { TodoItem } from '../TodoItem';

export const TodoList = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No hay tareas para mostrar</p>
                <p className="text-sm mt-2">¡Agrega una nueva tarea para comenzar!</p>
            </div>
        );
    }

    return (
        <ul className="space-y-2" role="list">
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </ul>
    );
};