import { Trash2, Check } from 'lucide-react';

export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all focus:outline-none focus:ring-2 ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-400'
        }`}
        aria-label={todo.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>
      
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
        aria-label="Eliminar tarea"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};