import { useState } from "react";
import {} from "./App.css";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(55);
  const [friends, setFriends] = useState(["Bekir", "Süleyman", "Ali"]);
  const [adress, setAdress] = useState({ title: "Adıyaman", zip: 123321 });
  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={() => setName("Halil")}>Change Name</button>
      <button onClick={() => setAge(23)}>Change age</button>

      <hr />
      <br />
      <br />

      <h1>Friends</h1>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Aksa"])}>
        Add New Friend
      </button>

      <hr />
      <br />
      <br />

      <h1>Adress</h1>
      <div>
        {adress.title} {adress.zip}
      </div>
      <br />
      <button onClick={() => setAdress({ ...adress, title: "İstanbul" })}>
        Change Adress
      </button>
    </div>
  );
}

export default App;
