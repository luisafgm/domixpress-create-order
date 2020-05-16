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

const save = () => {
  // dbRef.collection('domicilios').add({
  //   userId: '1234',
  //   name: 'Leon Rueda',
  //   address: 'frejavagen'
  // })
  window.open("https://api.whatsapp.com/send?phone=573234842907&message='hola'", '_blank');
}

const CustomerDetails = () => {
  return (
    <section> 

<div class="container">
  <div class="card-deck mb-2 text-center">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal" >Origen</h4>
      </div>
      <div class="card-body">
      <input class="form-control" type="text" name="name" placeholder="Nombre de quien envía"/> 
        <input class="form-control" type="tel" min="10" max="10" placeholder="Teléfono"/>
        <input class="form-control" type="text"  placeholder="Dirección"/>
      </div>
    </div>

<div class="card mb-4 shadow-sm">
      <div class="card-header" >
        <h4 class="my-0 font-weight-normal">Destino</h4>
      </div>
      <div class="card-body">
      <input class="form-control" type="text" name="name" placeholder="Nombre de quien recibe"/> 
        <input class="form-control" type="tel" placeholder="Teléfono"/>
        <input class="form-control" type="text" placeholder="Dirección"/>
      </div>
      </div>
    </div>
    </div>

      <button onClick={save} className="solicitar-servicio" type="button" id="" class="btn btn-outline-light" >Solicitar servicio</button>
  </section>
  
  )
  
}
export default CustomerDetails