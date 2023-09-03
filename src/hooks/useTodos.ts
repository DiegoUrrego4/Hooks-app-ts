import { useEffect, useReducer } from 'react';
import { Todo, todoReducer, Action, ActionName } from '../08-useReducer';

const initialState: Todo[] = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') ?? '[]');
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo: Todo) => {
    const action: Action = {
      type: ActionName.addTodo,
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({ type: ActionName.deleteTodo, payload: id });
  };

  const handleToggleTodo = (id: number) => {
    dispatch({
      type: ActionName.toggleTodo,
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};
