import React from 'react'
import Logo from '../../images/logo.jpeg'
import './carta.scss'

const Tablero = ({baraja,adivinarCartas,guardarAdivinarCartas}) => {
    const seleccionarCarta = (e) => {
        e.preventDefault();
        baraja.estado = !baraja.estado;
        console.log('baraja', baraja)
        guardarAdivinarCartas([...adivinarCartas, baraja])
    }
    console.log(baraja)
    return (
        <div className="carta carta">
            <div className={baraja.estado || baraja.adivinada ? 'active ' : 'desactive'} >
                    <img 
                        onClick={(e) => seleccionarCarta(e)}
                        src={baraja.carta}
                        alt={baraja.carta} />
            </div>
            <img 
                className={!baraja.estado && !baraja.adivinada ? 'active' : 'desactive'} 
                src={Logo} alt="carta"
                onClick={(e) => seleccionarCarta(e)} />
        </div>
    )
}

export default Tablero;