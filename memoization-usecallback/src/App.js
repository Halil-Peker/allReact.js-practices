import "./App.css";
import { useState, useCallback } from "react";
import HeaderCom from "./components/HeaderCom";

function App() {
  const [number, setNumber] = useState(0);

  const artır = useCallback(()=>{
    setNumber((prevState)=> prevState + 1)
  },[])

  return (
    <div className="App">
      <HeaderCom artır={artır} number={number  < 10 ? 0 : number} />
      <br/>
      <br/>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
