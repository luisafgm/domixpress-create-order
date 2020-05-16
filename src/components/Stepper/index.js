import React, {useState} from 'react'
import CustomerDetails from '../envio'
import TarifaCalculator from '../envio/TarifaCalculator'

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1)
  // aqui solo se van a controlar los pasos  dependiendo de en que paso vamos, vamos mostrando el componente adecuado
  // por ahora solo tenemos dos pasos, el primero para calcular la tarifa y el segundo para llenar los detalles
 
  return (
    <div>
      {currentStep === 1 && <TarifaCalculator nextStep={() => setCurrentStep(2)} />}
      {currentStep === 2 && <CustomerDetails nextStep={() => setCurrentStep(3)} />}
    </div>
  )
}

export default Stepper