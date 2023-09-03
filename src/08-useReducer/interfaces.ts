import { ActionName } from ".";

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

export interface Action {
  type: ActionName;
  payload?: Todo | number;
}