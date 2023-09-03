interface Props {
  id: number;
  description: string;
  done: boolean;
  onDeleteTodo: (id: number) => void;
}

export const TodoItem = ({ id, description, onDeleteTodo }: Props) => {
  const onClickDeleteTodo = () => {
    onDeleteTodo(id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-danger" onClick={onClickDeleteTodo}>
        Borrar
      </button>
    </li>
  );
};
