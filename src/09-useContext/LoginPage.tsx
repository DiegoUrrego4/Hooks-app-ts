import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <p>{JSON.stringify(user)}</p>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, email: 'juan@mail.com', name: 'Juan' })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
