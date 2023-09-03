import { Action, Todo } from './interfaces';

export enum ActionName {
  addTodo = '[TODO] Add todo',
  deleteTodo = '[TODO] Remove todo',
  toggleTodo = '[TODO] Toggle todo',
}

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ActionName.addTodo:
      return [...state, action.payload as Todo];
    case ActionName.deleteTodo:
      return state.filter(todo => todo.id !== action.payload);
    case ActionName.toggleTodo:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
