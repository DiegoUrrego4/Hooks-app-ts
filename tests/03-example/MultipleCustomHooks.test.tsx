import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { FetchResponse, useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch.ts');

describe('Pruebas en <MultipleCustomHooks />', () => {
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
});
