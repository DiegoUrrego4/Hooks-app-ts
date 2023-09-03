import { Todo } from '.';
import { useForm } from '../hooks';

interface Props {
  onNewTodo: (todo: Todo) => void;
}

export const TodoAdd = ({ onNewTodo }: Props) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (description.length <= 1) return;
    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false,
    });
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control"
        name="description"
        onChange={onInputChange}
        placeholder="¿Qué hay que hacer?"
        type="text"
        value={description}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
