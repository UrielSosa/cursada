import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClickSumar = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Contador en : {count}</h2>
      <button onClick={handleClickSumar}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};
export default Counter;
