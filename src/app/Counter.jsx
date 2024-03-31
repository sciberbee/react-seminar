import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  //useState: 현재 상태, 상태를 업데이트 할 함수를 반환, 0은 초기값

  const handleClick = () => {
    setCount(count + 1);
    //count를 직접 업데이트하면 안됨, setCount 안에 함수 혹은 값을 넣어야 함
    //setCount((curr) => curr + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
};
