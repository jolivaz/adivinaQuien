import React, { useState, useEffect, Fragment } from "react";
import Carta from "../carta/carta";
import "./tablero.scss";


const Tablero = ({
  cartas,
  guardarCartas
}) => {
  const [adivinarCartas, guardarAdivinarCartas] = useState([]);


  let verCartas = cartas.map(baraja => {
    return (
      <Carta
        key={baraja.id}
        baraja={baraja}
        adivinarCartas={adivinarCartas}
        guardarAdivinarCartas={guardarAdivinarCartas}
      />
    );
  });

  return cartas.length > 0 ? (
    <div className="tablero">
      <Fragment>{verCartas}</Fragment>
    </div>
  ) : (
    <div>
      <h3>Presionar REPARTIR para iniciar Partida</h3>
    </div>
  );
};

export default Tablero;
