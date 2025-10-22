import { useState, useEffect } from 'react';
import { loadTodos, saveTodos } from '../utils/localStorage';

export const useTodoStorage = () => {
  const [todos, setTodos] = useState(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return { todos, setTodos };
};