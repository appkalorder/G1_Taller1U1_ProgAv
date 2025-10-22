import { useState } from 'react';
import { X } from 'lucide-react';

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!inputValue.trim()) {
            setError('Por favor, ingresa una tarea válida. No puede estar vacía.');
            return;
        }

        onAddTodo(inputValue.trim());
        setInputValue('');
        setError('');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (error) setError('');
    };

    return (
        <div className="mb-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSubmit(e);
                        }
                    }}
                    placeholder="¿Qué necesitas hacer?"
                    className={`flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        error 
                        ? 'border-red-400 focus:ring-red-300' 
                        : 'border-gray-300 focus:ring-blue-400'
                    }`}
                    aria-label="Nueva tarea"
                    aria-invalid={!!error}
                    />
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                        Agregar
                    </button>
            </div>
            {error && (
                <p className="mt-2 text-red-600 text-sm flex items-center gap-1" role="alert">
                    <X size={16} />
                    {error}
                </p>
            )}
        </div>
    );
};