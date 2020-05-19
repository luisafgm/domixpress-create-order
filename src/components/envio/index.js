import React from 'react'

import * as firebase from "firebase/app"
import "firebase/firestore"
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyB3ThIu1iQ7iYAqo5YcjXQZFsObsH3NE6M",
  authDomain: "domiexpress-frontend.firebaseapp.com",
  databaseURL: "https://domiexpress-frontend.firebaseio.com",
  projectId: "domiexpress-frontend",
  storageBucket: "domiexpress-frontend.appspot.com",
  messagingSenderId: "735421177583",
  appId: "1:735421177583:web:4259dd9195a9987db2051a",
  measurementId: "G-XXV6ZF9C8E"
}

firebase.initializeApp(firebaseConfig)

const dbRef = firebase.firestore()

class CustomerDetails extends React.Component{
   
  constructor(props){
      super(props)
      this.state = {
        nameOri: '',
        telOri: '',
        addressOri: '',
        nameDes: '',
        telDes: '',
        addressDes: '',
      }
    }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const values = JSON.stringify(this.state)
  }

  save = () => {
    dbRef.collection('domicilios').add({
      orderData: this.state,
    })

    window.open("https://api.whatsapp.com/send?phone=573234842907&message='hola'", '_blank');
  }

  render(){
  
  const { nameOri, telOri, addressOri, nameDes, telDes, addressDes, pagoOri, pagoDes } = this.state

  return (
    <section> 
<form onSubmit={this.handleSubmit}>
<div className="container">
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal" >Origen</h4>
      </div>
      <div className="card-body">
      <input id="name-ori" className="form-control"
            name="nameOri"
            type="name"
            value={nameOri} 
            onChange={this.handleChange}
            placeholder="Nombre de quien envía"/> 
      <input id="tel-ori" className="form-control"
            name="telOri"
            type="tel"
            value={telOri}
            onChange={this.handleChange}
            placeholder="Teléfono"/>
      <input id="addr-ori" className="form-control"
            name="addressOri"
            type="address"
            value={addressOri}
            onChange={this.handleChange}
            placeholder="Dirección"/>
      </div>
    </div>

  <div className="card mb-4 shadow-sm">
      <div className="card-header" >
        <h4 className="my-0 font-weight-normal">Destino</h4>
      </div>
      <div className="card-body">
      <input id="name-des" className="form-control"
            name="nameDes"
            type="name"
            value={nameDes} 
            onChange={this.handleChange}
            placeholder="Nombre de quien envía"/> 
      <input id="tel-des" className="form-control"
            name="telDes"
            type="tel"
            value={telDes} 
            onChange={this.handleChange}
            placeholder="Teléfono"/>
      <input id="addr-des" className="form-control"
            name="addressDes"
            type="address"
            value={addressDes} 
            onChange={this.handleChange}
            placeholder="Dirección"/>
      </div>
  </div>
  </div>



  <div className="card mb-4 shadow-sm">
      <div className="card-header" >
        <h4 className="my-0 font-weight-normal">Metodo de pago</h4>
      </div>
      <div className="custom-control custom-radio">
          <input id="pagoorigen" name="paymentMethod" 
          className="custom-control-input"
          type="radio"  onChange={this.handleChange}
          value={pagoOri} />
          <label className="custom-control-label" 
          htmlFor="pagoorigen">Origen</label>
      </div>
      <div className="custom-control custom-radio">
          <input id="pagodestino" name="paymentMethod" 
          className="custom-control-input"
          type="radio"  onChange={this.handleChange}
          value={pagoDes} />           
          <label className="custom-control-label" htmlFor="pagodestino">Destino</label>
        </div>
    </div>
</div>
      <button onClick={this.save} className="solicitar-servicio" type="submit" id="" className="btn btn-outline-light" >Solicitar servicio</button>
      </form>    
  </section>
  
  )
  }
}
export default CustomerDetails