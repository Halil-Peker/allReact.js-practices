import "./App.css";
import { useState, useMemo } from "react";
import HeaderCom from "./components/HeaderCom";
import ButtonCom from "./components/ButtonCom";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState(""); 
  
  const data = useMemo(()=>{
    return calculateObject(number);
  }, [number])

  // const data = calculateObject();
  //Bu kod açılıp üstteki useMemo kodu kapatıldığında aşağıdaki imputa her değer girildiğinde sayfa komple render edilmektedir.
  //Use Memo sayesinde işlem görmeyenn yerin render edilmesi engellenmektedir. 

  return (
    <div className="App">
      <HeaderCom data={data} number={number < 5 ? 0 : number} />
      <ButtonCom number={number} setNumber={setNumber}/>
      <br/>
      <br/>

      {/* Bu input useMemo kodunu test etmek için yazıldı */}
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

  //Bu fonksiyonla useMemo test edilmiştir. UseMemo içindeki sayı değiştikçe bu ko çalışmaktadır.
  function calculateObject (number){
    console.log("Calculating....")  
    for(let i ; i < 100000000 ; i++){}
    console.log("Calculate Complate")  
    return({name : "Mehmet", number})
  }

export default App;
