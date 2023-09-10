import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { User } from '../../src/09-useContext/context/interfaces';

describe('Pruebas en <HomePage />', () => {
  const mockUser: User = {
    id: 1,
    email: 'diego@mail.com',
    name: 'Diego Urrego',
  };

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: {} as User, setUser: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('{}');
  });

  test('debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user: mockUser, setUser: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(screen.getByText(mockUser.name)).toBeTruthy();
    expect(preTag.innerHTML).toBe(JSON.stringify(mockUser, null, 3));
  });
});
