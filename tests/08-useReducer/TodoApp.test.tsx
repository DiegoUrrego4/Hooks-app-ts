import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />', () => {
  (useTodos as jest.Mock).mockReturnValue({
    todos: [
      { id: 1, description: 'Comprar pan', done: false },
      { id: 2, description: 'Pasear a mi perrita', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('debe de mostrar el componente correctamente', () => {
    render(<TodoApp />);
    expect(screen.getByText('Comprar pan')).toBeTruthy();
    expect(screen.getByText('Pasear a mi perrita')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
