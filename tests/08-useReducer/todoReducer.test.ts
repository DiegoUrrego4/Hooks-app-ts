import { Action, ActionName, todoReducer } from '../../src/08-useReducer';
import { Todo } from '../../src/08-useReducer/interfaces';

describe('Pruebas en todoReducer', () => {
  const initialState: Todo[] = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];
  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {} as Action);
    expect(newState).toBe(initialState);
  });

  test('debe de agregar un Todo', () => {
    const action: Action = {
      type: ActionName.addTodo,
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContain(action.payload);
  });

  test('debe de eliminar un todo', () => {
    const action: Action = {
      type: ActionName.deleteTodo,
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(0);
  });

  test('debe de realizar el toggle del todo', () => {
    const action: Action = {
      type: ActionName.toggleTodo,
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
