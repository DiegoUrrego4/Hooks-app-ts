interface Props {
  id: number;
  description: string;
  done: boolean;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoItem = ({
  id,
  description,
  done,
  onDeleteTodo,
  onToggleTodo,
}: Props) => {
  const onClickDeleteTodo = () => {
    onDeleteTodo(id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => onToggleTodo(id)}
      >
        {description}
      </span>
      <button className="btn btn-danger" onClick={onClickDeleteTodo}>
        Borrar
      </button>
    </li>
  );
};
