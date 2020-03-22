import React, { useState } from "react";
import Header from "./components/header/header";
import Tablero from "./components/tablero/tablero";
import "./App.css";

function App() {
  const [cartas, guardarCartas] = useState([]);

  return (
    <div className="App">
      <Header
        title="Adivina quien soy"
        guardarCartas={guardarCartas}
      />

      <Tablero
        cartas={cartas}
        guardarCartas={guardarCartas}
      />
    </div>
  );
}

export default App;
