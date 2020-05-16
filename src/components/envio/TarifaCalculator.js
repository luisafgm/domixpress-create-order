import React, { useState } from 'react'
import Select from '../Select'
import './TarifaCalculator.css'


//const tarifas = require('./tarifas.json')

//el primer nivel representa de donde sale el domicilio
const tarifas = {
  'sur1': { 
    'sur2': 5000,
    'sur3': 3000,
    'norte': 5000,
    'acopi': 5000,
    'jamundi': 3000,
    'aeropuerto': 5000,
    'yum-cav-mo': 5000,
    'palmira': 5000,
    'tulua': 5000,
  },
  'sur2': { 
    'sur1': 5000,
    'sur3': 3000,
    'norte': 5000,
    'acopi': 5000,
    'jamundi': 3000,
    'aeropuerto': 5000,
    'yum-cav-mo': 5000,
    'palmira': 5000,
    'tulua': 5000,
  },
  'sur3': { 
    'sur1': 5000,
    'sur2': 3000,
    'norte': 5000,
    'acopi': 5000,
    'jamundi': 3000,
    'aeropuerto': 5000,
    'yum-cav-mo': 5000,
    'palmira': 5000,
    'tulua': 5000,
  },
  'norte' : { 
    'sur1': 5000,
    'sur2': 3000,
    'sur3': 5000,
    'acopi': 5000,
    'jamundi': 3000,
    'aeropuerto': 5000,
    'yum-cav-mo': 5000,
    'palmira': 5000,
    'tulua': 5000,
  },
  'acopi': { 
    'sur1': 5000,
    'sur2': 3000,
    'sur3': 5000,
    'norte': 5000,
    'jamundi': 3000,
    'aeropuerto': 5000,
    'yum-cav-mo': 5000,
    'palmira': 5000,
    'tulua': 5000,

  }
}

const buscarTarifa = (placeFrom, placeTo) => {
  if (placeFrom === "no-seleccionado" || placeTo === "no-seleccionado") return null

  if (tarifas[placeFrom]) return tarifas[placeFrom][placeTo]
  return null
}

const getDestinoOptionsForOrigin = (placeFrom, tarifas) => {
  if (placeFrom) return Object.keys(tarifas[placeFrom])

  return []
}

const TarifaCalculator = ({ nextStep }) => {
  //vamos a tener 3 variables en el estado de react, la tarifa y el lugar desde y para del envío
  const [placeFrom, setPlaceFrom] = useState()
  const [placeTo, setPlaceTo] = useState()

  const mostrarTarifa = place => (evt) => {
    if (place === 'origen') setPlaceFrom(evt.target.value)
    if (place === 'destino') setPlaceTo(evt.target.value)
  }

  const tarifa = buscarTarifa(placeFrom, placeTo)

  const originOptions = Object.keys(tarifas)
  const destinoOptions = getDestinoOptionsForOrigin(placeFrom, tarifas) 
  
  return (
    <section className='tarifa-section'>
      <Select 
        label='¿Dónde lo recogemos?' 
        options={originOptions} // ['norte', 'sur' ...]
        onSelect={mostrarTarifa('origen')} // placeFrom -> 'norte'
        />

      <Select 
        label='¿Dónde lo entregamos?' 
        options={destinoOptions} // ['norte', 'este']
        onSelect={mostrarTarifa('destino')} // placeTo -> este
        />

      {tarifa && <div class="card-body">
        <h1 class="valor-aproximado"><strong>${tarifa}</strong> </h1>
        <h6 class="valor-aproximado">Valor apróximado del servicio</h6>
        </div>}

      {tarifa && <div><button onClick={nextStep} variant="contained" type="button" class="btn btn-outline-light" >¡Siguiente!</button></div>}
    </section>
  )
}

export default TarifaCalculator
