import React from 'react'

const getLabelForZona = (zona) => {
  if (zona === 'sur1') return 'Cr 15 - Cr 80'
  if (zona === 'sur2') return 'Cr 80 - Cr 100'
  if (zona === 'sur3') return 'Cr 100+'
  if (zona === 'yum-cav-mo') return 'Yumbo-Cavasa-Montebello'
  if (zona === 'norte') return 'Norte'
  if (zona === 'acopi') return 'Acopi'
  if (zona === 'palmira') return 'Palmira'
  if (zona === 'tulia') return 'Tulua'
  if (zona === 'jamundi') return 'Jamundí'
  if (zona === 'aeropuerto') return 'Aeropuerto'
  if (zona === 'sur') return 'Sur'


  return zona
}


const Select = ({label, options, onSelect}) => {
  return (
    <select className='envio-place' onChange={onSelect}>
      <option selected value="no-seleccionado">{label}</option>
      { options.map(option => <option value={option}>{getLabelForZona(option)}</option>)}
    </select>
  )
}

export default Select