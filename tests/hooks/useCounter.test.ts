import { useCounter } from './../../src/hooks/useCounter';
import { act, renderHook } from '@testing-library/react';

describe('Pruebas en useCounter', () => {
  test('debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(13);
  });

  test('debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    act(() => {
      decrement(3);
    });
    expect(result.current.counter).toBe(7);
  });

  test('debe de no dejar que el contador sea negativo', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement } = result.current;

    act(() => {
      decrement(9);
      decrement();
    });

    expect(result.current.counter).toBe(0);

    act(() => decrement())
  });

  test('debe de establecer el contador en el valor predefinido', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement, reset } = result.current;
    act(() => {
      decrement(2);
    });
    expect(result.current.counter).toBe(8);
    act(() => reset());
    expect(result.current.counter).toBe(10);
  });
});
