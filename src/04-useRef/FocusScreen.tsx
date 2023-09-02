import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    // document.querySelector('input')?.select();
    // console.log(inputRef);
    inputRef.current?.select();
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
