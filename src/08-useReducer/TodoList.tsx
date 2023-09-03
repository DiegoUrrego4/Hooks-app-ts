import { Todo } from '.';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }: Props) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};
