import { useState, useEffect } from 'react';
import { loadTodos, saveTodos } from '../utils/localStorage';

export const useTodoStorage = () => {
  const [todos, setTodos] = useState([]);

  // Cargar al iniciar
  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  // Guardar cada vez que cambien
  useEffect(() => {
    if (todos.length > 0 || localStorage.getItem('todos')) {
      saveTodos(todos);
    }
  }, [todos]);

  return { todos, setTodos };
};