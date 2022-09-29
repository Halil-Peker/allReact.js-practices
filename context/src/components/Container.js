import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";

function Container() {
  const { themee } = useContext(ThemeContext);
  return (
    <div className={`app ${themee === "dark" ? themee : ""}`}>
      <Header />
      <br />
      <hr />
      <br />
      <Button />
    </div>
  );
}

export default Container;
