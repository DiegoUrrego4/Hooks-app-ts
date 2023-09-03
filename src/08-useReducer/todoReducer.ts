import { Action, Todo } from './interfaces';

export enum ActionName {
  addTodo = '[TODO] Add todo',
  deleteTodo = '[TODO] Remove todo ',
}

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ActionName.addTodo:
      return [...state, action.payload as Todo];
    case ActionName.deleteTodo:
    return state.filter(todo => todo.id !== action.payload)
    default:
      return state;
  }
};
