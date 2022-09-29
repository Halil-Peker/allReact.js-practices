import { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);
  const increase = () => {
    setCount(Count + 1);
  };
  const decrease = () => {
    setCount(Count - 1);
  };

  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={increase}>İncrease</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
export default Counter;
