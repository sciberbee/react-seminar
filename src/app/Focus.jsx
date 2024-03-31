// Focus input on button click
import { useEffect, useRef } from "react";

export const Focus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
            //log the input text
            console.log(inputRef.current.value);
          }
        }}
      >
        Focus the input
      </button>
    </>
  );
};
