import { FetchResponse, useFetch, useCounter } from '../hooks';
import { Card, LoadingQuote } from './';
// import './styles.css';

const isFetchResponse = (obj: unknown): obj is FetchResponse => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'image' in obj &&
    'name' in obj &&
    'status' in obj
  );
};

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Rick and Morty characters</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        isFetchResponse(data) && (
          <Card imageUrl={data.image} name={data.name} status={data.status} />
        )
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
