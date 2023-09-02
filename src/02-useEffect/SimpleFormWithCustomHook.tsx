import { Message } from './Message';
import { useForm } from '../hooks';

interface FormFields {
  username: string;
  email: string;
  password: string;
}

export const FormWithCustomHook = () => {
  const { email, password, username, onInputChange, onResetForm } =
    useForm<FormFields>({
      username: '',
      email: '',
      password: '',
    });

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      {username === 'strider2' && <Message />}
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
