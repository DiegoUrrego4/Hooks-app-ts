import { FetchResponse, useFetch, useCounter } from '../hooks';
import { Card, LoadingQuote } from '../03-examples';
import '../03-examples/styles.css';

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  if (!data) return;

  const { image, name, status } = data as FetchResponse;

  return (
    <>
      <h1>Rick and Morty characters</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Card imageUrl={image} name={name} status={status} />
      )}

      {counter > 1 && (
        <button
          className="btn btn-primary"
          onClick={() => decrement()}
          disabled={isLoading}
        >
          Previous Character
        </button>
      )}
      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next Character
      </button>
    </>
  );
};
