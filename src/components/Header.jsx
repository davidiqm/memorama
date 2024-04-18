import '../css/Header.css'

export default function Header({ numeroIntentos, handleResetearPartida }) {
  return (
    <header>
      <div className="titulo">Memorama</div>

      <div>
        <button
          className="boton-reiniciar"
          onClick={handleResetearPartida}
        >
          Reiniciar
        </button>
      </div>
      
      <div className="titulo">Intentos: {numeroIntentos}</div>
    </header>
  )
}
