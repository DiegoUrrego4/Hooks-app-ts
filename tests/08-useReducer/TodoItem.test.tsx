import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Todo, TodoItem } from '../../src/08-useReducer';

describe('Pruebas en <TodoItem />', () => {
  const todo: Todo = {
    id: 1,
    description: 'Comprar pan',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el todo pendiente de completar', () => {
    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        {...todo}
      />
    );
    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('debe de mostrar el todo completado', () => {
    todo.done = true;

    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        {...todo}
      />
    );

    const spanElement = screen.getByLabelText('span');

    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('debe de llamar el toggle Todo cuando se hace click', () => {
    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        {...todo}
      />
    );
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('debe de llamar el delete Todo cuando se hace click', () => {
    render(
      <TodoItem
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        {...todo}
      />
    );
    const buttonELement = screen.getByRole('button', { name: 'Borrar' });
    fireEvent.click(buttonELement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
