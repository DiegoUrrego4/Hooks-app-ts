import React from 'react';
import { useForm } from './../../src/hooks/useForm';
import { act, renderHook } from '@testing-library/react';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Diego',
    email: 'diego@mail.com',
  };

  test('debe de regresar la información por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el nombre del formulario', () => {
    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    const mockChangeEvent = {
      target: { name: 'name', value: newValue },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      onInputChange(mockChangeEvent);
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('debe de realizar el reset del formulario', () => {
    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    const mockChangeEvent = {
      target: { name: 'name', value: newValue },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      onInputChange(mockChangeEvent);
    });

    // Con esto verifico que los campos hayan cambiado antes del reset
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

    act(() => {
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
