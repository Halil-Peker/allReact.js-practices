import React from "react";

function ButtonCom({ setNumber, number }) {
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default ButtonCom;
