import { useRef } from "react";

export const FocusScreen = () => {
  const ref = useRef();

  const onFocus = () => {
    ref.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={ref}
        type={"text"}
        placeholder={"Ingrese su nombre"}
        className={"form-control"}
        style={{width:"20%"}}
      />
      <button onClick={onFocus} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
