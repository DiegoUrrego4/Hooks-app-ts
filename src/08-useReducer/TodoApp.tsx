import { useEffect, useReducer } from 'react';
import { Todo, todoReducer, TodoList, TodoAdd, Action, ActionName } from './';

const initialState: Todo[] = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') ?? '[]');
};

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        Todo App 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
