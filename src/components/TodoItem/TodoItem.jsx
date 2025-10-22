import { useState } from "react";
import { Trash2, Check } from "lucide-react";

export const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(todo.id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <li className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow relative">
        {/* Botón de toggle */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all focus:outline-none focus:ring-2 ${
            todo.completed
              ? "bg-green-500 border-green-500"
              : "border-gray-300 hover:border-green-400"
          }`}
          aria-label={
            todo.completed
              ? "Marcar como pendiente"
              : "Marcar como completada"
          }
        >
          {todo.completed && <Check size={16} className="text-white" />}
        </button>

        {/* Texto */}
        <span
          className={`flex-1 ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>

        {/* Botón eliminar */}
        <button
          onClick={handleDelete}
          className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
          aria-label="Eliminar tarea"
        >
          <Trash2 size={18} />
        </button>
      </li>

      {/* Modal de confirmación */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4">
              ¿Eliminar esta tarea?
            </h2>
            <p className="text-gray-600 mb-6">
              Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
