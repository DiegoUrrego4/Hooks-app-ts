import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { User } from '../../src/09-useContext/context/interfaces';

describe('Pruebas en <LoginPage />', () => {
  const mockUser: User = {
    id: 1,
    email: 'diego@mail.com',
    name: 'Diego Urrego',
  };

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: {} as User, setUser: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('{}');
  });

  test('debe de llamar el setUser cuando se hace click en el botón', () => {
    const mockSetUser = jest.fn();
    render(
      <UserContext.Provider value={{ user: {} as User, setUser: mockSetUser }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole('button', { name: 'Establecer usuario' });
    fireEvent.click(button);
    expect(mockSetUser).toHaveBeenCalled();
    expect(mockSetUser).toHaveBeenCalledWith({
      email: 'juan@mail.com',
      id: 123,
      name: 'Juan',
    });
  });
});
