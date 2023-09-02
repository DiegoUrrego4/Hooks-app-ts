import { ChangeEvent, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider2',
    email: 'mail@mail.com',
  });

  const { email, username } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Simple Form</h1>
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
      {username === 'strider2' && <Message />}
    </>
  );
};
