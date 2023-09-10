import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch.ts');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();
  (useCounter as jest.Mock).mockReturnValue({
    counter: 1,
    increment: mockIncrement,
    decrement: jest.fn(),
    reset: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Rick and Morty characters'));
    expect(screen.getByText('Loading...'));
    const nextButton = screen.getByRole('button', {
      name: 'Next Character',
    }) as HTMLButtonElement;
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('debe de mostrar un personaje', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: {
        image: 'https://www.miImagen.jpg',
        name: 'Rick Sánchez',
        status: 'Alive',
      },
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Rick Sánchez')).toBeTruthy();
    expect(screen.getByText('Alive')).toBeTruthy();
    const nextButton = screen.getByRole('button', {
      name: 'Next Character',
    }) as HTMLButtonElement;
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la función de implementar', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: {
        image: 'https://www.miImagen.jpg',
        name: 'Rick Sánchez',
        status: 'Alive',
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', {
      name: 'Next Character',
    }) as HTMLButtonElement;

    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
