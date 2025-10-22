import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filters';
import { useTodoStorage } from './hooks/useTodoStorage';

function App() {
  const { todos, setTodos } = useTodoStorage();
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const counts = {
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 Mi Lista de Tareas
          </h1>
          <p className="text-gray-600">Organiza tu día de manera eficiente</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <TodoForm onAddTodo={handleAddTodo} />
          <Filters
            currentFilter={filter}
            onFilterChange={setFilter}
            counts={counts}
          />
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        </div>

        <footer className="text-center mt-6 text-gray-600 text-sm">
          <p>Taller de Componentes • React + Vite + JSX</p>
        </footer>
      </div>
    </div>
  );
}

export default App;