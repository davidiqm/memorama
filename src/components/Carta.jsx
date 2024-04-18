import ReactCardFlip from 'react-card-flip'
import '../css/Carta.css'

export default function Carta ({ icono, estaSiendoComparada, handleSeleccionarCarta, fueAdivinada }) {
  return (
    <div className='carta' onClick={handleSeleccionarCarta}>
      <ReactCardFlip
        isFlipped={estaSiendoComparada || fueAdivinada}
      >
        <div className='portada' />
        <div className='contenido'>
          <i className={`fa ${icono} fa-5x`} />
        </div>
      </ReactCardFlip>
    </div>
  )
}
