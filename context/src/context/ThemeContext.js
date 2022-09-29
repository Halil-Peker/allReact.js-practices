import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themee, setThemee] = useState(
    localStorage.getItem("themee" || "light")
  );

  useEffect(() => {
    localStorage.setItem("themee", themee);
  }, [themee]);

  const values = {
    themee,
    setThemee,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
