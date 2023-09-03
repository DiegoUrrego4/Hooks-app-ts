import { Todo } from '.';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

export const TodoList = ({ todos = [], onDeleteTodo }: Props) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem key={todo.id} onDeleteTodo={onDeleteTodo} {...todo} />
      ))}
    </ul>
  );
};
