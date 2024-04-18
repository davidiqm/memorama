import { useEffect, useState } from 'react'
import construirBaraja from './utils/construirBaraja'
import Header from './components/Header'
import Tablero from './components/Tablero'
import './css/App.css'

const barajaInicial = construirBaraja()
const estadoInicial = {
  barajaInicial,
  parejaSeleccionada: [],
  estaComparando: false,
  numeroIntentos: 0
}

function App () {
  const [baraja, setBaraja] = useState([...estadoInicial.barajaInicial])
  const [parejaSeleccionada, setParejaSeleccionada] = useState(estadoInicial.parejaSeleccionada)
  const [estaComparando, setEstaComparando] = useState(estadoInicial.estaComparando)
  const [numeroIntentos, setNumeroIntentos] = useState(estadoInicial.numeroIntentos)

  const compararPareja = parejaSeleccionada => {
    setEstaComparando(true)

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada
      let barajaComparar = [...baraja]

      if (primeraCarta.icono === segundaCarta.icono) {
        barajaComparar = barajaComparar.map(carta => {
          if (carta.icono !== primeraCarta.icono) return carta

          return { ...carta, fueAdivinada: true }
        })
      }

      setNumeroIntentos(numeroIntentos + 1)
      setParejaSeleccionada([])
      setBaraja(barajaComparar)
      setEstaComparando(false)
    }, 1000)
  }

  const handleSeleccionarCarta = (carta) => {
    if (estaComparando || carta.fueAdivinada || parejaSeleccionada.indexOf(carta) > -1) return

    const nuevaParejaSeleccionada = [...parejaSeleccionada, carta]
    setParejaSeleccionada(nuevaParejaSeleccionada)

    if (nuevaParejaSeleccionada.length === 2) compararPareja(nuevaParejaSeleccionada)
  }

  const handleResetearPartida = () => {
    setBaraja(construirBaraja())
    setParejaSeleccionada(estadoInicial.parejaSeleccionada)
    setEstaComparando(estadoInicial.estaComparando)
    setNumeroIntentos(estadoInicial.numeroIntentos)
  }

  useEffect(() => {
    if (baraja.filter(carta => !carta.fueAdivinada).length === 0) {
      alert(`Ganaste en ${numeroIntentos} intentos!`)
    }
  }, [baraja, numeroIntentos])

  return (
    <main>
      <Header
        numeroIntentos={numeroIntentos}
        handleResetearPartida={handleResetearPartida}
      />

      <Tablero
        baraja={baraja}
        parejaSeleccionada={parejaSeleccionada}
        handleSeleccionarCarta={handleSeleccionarCarta}
      />
    </main>
  )
}

export default App
