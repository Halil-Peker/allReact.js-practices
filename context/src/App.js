import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
