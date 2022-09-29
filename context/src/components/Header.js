import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const data = useContext(ThemeContext);

  return (
    <div>
      Active Header Theme: {data.themee}
      <button
        onClick={() =>
          data.setThemee(data.themee === "light" ? "dark" : "light")
        }
      >
        Change Theme
      </button>
    </div>
  );
}

export default Header;
