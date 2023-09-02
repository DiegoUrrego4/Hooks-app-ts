interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

const initialState: Todo[] = [
  {
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => { 

 }
