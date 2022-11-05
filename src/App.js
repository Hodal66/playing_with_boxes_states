import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import data from "./data";
function App() {
  const [squares, setSquares] = useState(data);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const elements = squares.map((item) => (
    <Box
      id={item.id}
      on={item.on}
      key={item.id}
      name={item.name}
      toggle={() => toggle(item.id)}
    />
  ));
  return <div>{elements}</div>;
}

export default App;
