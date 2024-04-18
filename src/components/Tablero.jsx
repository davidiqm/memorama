import Carta from './Carta'
import '../css/Tablero.css'

export default function Tablero({ baraja, parejaSeleccionada, handleSeleccionarCarta }) {
  return (
    <div className='tablero'>
      {baraja.map((carta, index) => {
        const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1

        return (
          <Carta
            key={index}
            icono={carta.icono}
            estaSiendoComparada={estaSiendoComparada}
            fueAdivinada={carta.fueAdivinada}
            handleSeleccionarCarta={() => handleSeleccionarCarta(carta)}
          />
        )
      })}
    </div>
  )
}
