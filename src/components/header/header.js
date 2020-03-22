import React, {useState} from "react";
import Logo from "../../images/logo.jpeg";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.png";
import c6 from "../../images/c6.png";
import c7 from "../../images/c7.png";
import c8 from "../../images/c8.png";
import c9 from "../../images/c9.png";
import c10 from "../../images/c10.png";
import c11 from "../../images/c11.png";
import c12 from "../../images/c12.png";
import c13 from "../../images/c13.png";
import c14 from "../../images/c14.png";
import c15 from "../../images/c15.png";
import c16 from "../../images/c16.png";
import c17 from "../../images/c17.png";
import c18 from "../../images/c18.png";
import c19 from "../../images/c19.png";
import c20 from "../../images/c20.png";
import c21 from "../../images/c21.png";
import c22 from "../../images/c22.png";
import c23 from "../../images/c23.png";
import c24 from "../../images/c24.png";
import "./header.scss";

const Header = ({
  title,
  guardarCartas
}) => {
  let data = {
    "cartas": [
        {
            "id": 1,
            "carta": c1,
            "estado": true,
            "adivinada": false
        },
        {
         "id": 2,
         "carta": c2,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 3,
         "carta": c3,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 4,
         "carta": c4,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 5,
         "carta": c5,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 6,
         "carta": c6,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 7,
         "carta": c7,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 8,
         "carta": c8,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 9,
         "carta": c9,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 10,
         "carta": c10,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 11,
         "carta": c11,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 12,
         "carta": c12,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 13,
         "carta": c13,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 14,
         "carta": c14,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 15,
            "carta": c15,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 16,
            "carta": c16,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 17,
         "carta": c17,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 18,
         "carta": c18,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 19,
         "carta": c19,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 20,
            "carta": c20,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 21,
         "carta": c21,
            "estado": true,
         "adivinada": false
     },
     {
         "id": 22,
         "carta": c22,
          "estado": true,
         "adivinada": false
     },
     {
         "id": 23,
          "carta": c23,
          "estado": true,
         "adivinada": false
     },
     {
         "id": 24,
          "carta": c24,
          "estado": true,
         "adivinada": false
     }
    ]
 }
 const [person, guardarPerson] =  useState({});
  const repartirCartas = listaCartas => {
    let nuevasCartas = listaCartas.sort(function(a, b) {
      return Math.random() - 0.5;
    });

    guardarPerson(data.cartas[Math.floor(Math.random() * (24 - 1)) + 1])

    nuevasCartas = nuevasCartas.map(cartas => {
      cartas.estado = true;
      cartas.adivinada = false;
      return cartas;
    });
    guardarCartas(nuevasCartas);
  };

  return (
    <header className="header-app">
      {
        person.carta ?
        <div className="bloque-my-person">
          <img className="my-person" src={person.carta} alt={person.carta} />
        </div>
        : null
      }

      <img src={Logo} alt={Logo} />
      <div className="info">
        <h1>{title}</h1>
          <p>https://github.com/jolivaz</p>
      </div>
      <button onClick={() => repartirCartas(data.cartas)}>Repartir</button>
    </header>
  );
};

export default Header;
