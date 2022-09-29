import "./App.css";
import Header from "./Components/Header";
import User from "./Components/User";

const friends = [
  {
    id: 1,
    name: "Halil",
  },
  {
    id: 2,
    name: "Ahmed",
  },
  {
    id: 3,
    name: "Samed",
  },
];

function App() {
  return (
    <div>
      <Header />

      <User
        name="Halil"
        surname="Peker"
        isLogged={true}
        age={23}
        friends={friends}
        adress={{
          title: "Arnavutköy",
          zip: 34000,
        }}
      />
    </div>
  );
}

export default App;
