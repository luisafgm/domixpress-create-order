(this.webpackJsonpdomiexpress=this.webpackJsonpdomiexpress||[]).push([[0],{16:function(e,a,t){e.exports=t(28)},21:function(e,a,t){},22:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(11),s=t.n(r),c=(t(21),t(22),t(1)),l=t(4),i=t(12),m=t(13),u=t(15),d=t(14),p=t(5);t(23),t(26);p.initializeApp({apiKey:"AIzaSyB3ThIu1iQ7iYAqo5YcjXQZFsObsH3NE6M",authDomain:"domiexpress-frontend.firebaseapp.com",databaseURL:"https://domiexpress-frontend.firebaseio.com",projectId:"domiexpress-frontend",storageBucket:"domiexpress-frontend.appspot.com",messagingSenderId:"735421177583",appId:"1:735421177583:web:4259dd9195a9987db2051a",measurementId:"G-XXV6ZF9C8E"});var h=p.firestore(),g=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,o=a.value;n.setState(Object(l.a)({},t,o))},n.handleSubmit=function(e){e.preventDefault();JSON.stringify(n.state)},n.save=function(){h.collection("domicilios").add({orderData:n.state}),window.open("https://api.whatsapp.com/send?phone=573234842907&message='hola'","_blank")},n.state={nameOri:"",telOri:"",addressOri:"",nameDes:"",telDes:"",addressDes:""},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.nameOri,t=e.telOri,n=e.addressOri,r=e.nameDes,s=e.telDes,c=e.addressDes,i=e.pagoOri,m=e.pagoDes;return o.a.createElement("section",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card-deck mb-3 text-center"},o.a.createElement("div",{className:"card mb-4 shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"my-0 font-weight-normal"},"Origen")),o.a.createElement("div",{className:"card-body"},o.a.createElement("input",{id:"name-ori",className:"form-control",name:"nameOri",type:"name",value:a,onChange:this.handleChange,placeholder:"Nombre de quien env\xeda"}),o.a.createElement("input",{id:"tel-ori",className:"form-control",name:"telOri",type:"tel",value:t,onChange:this.handleChange,placeholder:"Tel\xe9fono"}),o.a.createElement("input",{id:"addr-ori",className:"form-control",name:"addressOri",type:"address",value:n,onChange:this.handleChange,placeholder:"Direcci\xf3n"}))),o.a.createElement("div",{className:"card mb-4 shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"my-0 font-weight-normal"},"Destino")),o.a.createElement("div",{className:"card-body"},o.a.createElement("input",{id:"name-des",className:"form-control",name:"nameDes",type:"name",value:r,onChange:this.handleChange,placeholder:"Nombre de quien env\xeda"}),o.a.createElement("input",{id:"tel-des",className:"form-control",name:"telDes",type:"tel",value:s,onChange:this.handleChange,placeholder:"Tel\xe9fono"}),o.a.createElement("input",{id:"addr-des",className:"form-control",name:"addressDes",type:"address",value:c,onChange:this.handleChange,placeholder:"Direcci\xf3n"})))),o.a.createElement("div",{className:"card mb-4 shadow-sm"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h4",{className:"my-0 font-weight-normal"},"Metodo de pago")),o.a.createElement("div",{className:"custom-control custom-radio"},o.a.createElement("input",{id:"pagoorigen",name:"paymentMethod",className:"custom-control-input",type:"radio",onChange:this.handleChange,value:i}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"pagoorigen"},"Origen")),o.a.createElement("div",{className:"custom-control custom-radio"},o.a.createElement("input",{id:"pagodestino",name:"paymentMethod",className:"custom-control-input",type:"radio",onChange:this.handleChange,value:m}),o.a.createElement("label",{className:"custom-control-label",htmlFor:"pagodestino"},"Destino")))),o.a.createElement("button",Object(l.a)({onClick:this.save,className:"solicitar-servicio",type:"submit",id:""},"className","btn btn-outline-light"),"Solicitar servicio")))}}]),t}(o.a.Component),v=function(e){var a=e.label,t=e.options,n=e.onSelect;return o.a.createElement("select",{className:"envio-place",onChange:n},o.a.createElement("option",{selected:!0,value:"no-seleccionado"},a),t.map((function(e){return o.a.createElement("option",{value:e},"sur1"===(a=e)?"Cr 15 - Cr 80":"sur2"===a?"Cr 80 - Cr 100":"sur3"===a?"Cr 100+":"yum-cav-mo"===a?"Yumbo-Cavasa-Montebello":"norte"===a?"Norte":"acopi"===a?"Acopi":"palmira"===a?"Palmira":"tulia"===a?"Tulua":"jamundi"===a?"Jamund\xed":"aeropuerto"===a?"Aeropuerto":"sur"===a?"Sur":a);var a})))},b=(t(27),{sur1:{sur2:5e3,sur3:3e3,norte:5e3,acopi:5e3,jamundi:3e3,aeropuerto:5e3,"yum-cav-mo":5e3,palmira:5e3,tulua:5e3},sur2:{sur1:5e3,sur3:3e3,norte:5e3,acopi:5e3,jamundi:3e3,aeropuerto:5e3,"yum-cav-mo":5e3,palmira:5e3,tulua:5e3},sur3:{sur1:5e3,sur2:3e3,norte:5e3,acopi:5e3,jamundi:3e3,aeropuerto:5e3,"yum-cav-mo":5e3,palmira:5e3,tulua:5e3},norte:{sur1:5e3,sur2:3e3,sur3:5e3,acopi:5e3,jamundi:3e3,aeropuerto:5e3,"yum-cav-mo":5e3,palmira:5e3,tulua:5e3},acopi:{sur1:5e3,sur2:3e3,sur3:5e3,norte:5e3,jamundi:3e3,aeropuerto:5e3,"yum-cav-mo":5e3,palmira:5e3,tulua:5e3}}),E=function(e){var a=e.nextStep,t=Object(n.useState)(),r=Object(c.a)(t,2),s=r[0],l=r[1],i=Object(n.useState)(),m=Object(c.a)(i,2),u=m[0],d=m[1],p=function(e){return function(a){"origen"===e&&l(a.target.value),"destino"===e&&d(a.target.value)}},h=function(e,a){return"no-seleccionado"===e||"no-seleccionado"===a?null:b[e]?b[e][a]:null}(s,u),g=Object.keys(b),E=function(e,a){return e?Object.keys(a[e]):[]}(s,b);return o.a.createElement("section",{className:"tarifa-section"},o.a.createElement(v,{label:"\xbfD\xf3nde lo recogemos?",options:g,onSelect:p("origen")}),o.a.createElement(v,{label:"\xbfD\xf3nde lo entregamos?",options:E,onSelect:p("destino")}),h&&o.a.createElement("div",{className:"card-body"},o.a.createElement("h1",{className:"valor-aproximado"},o.a.createElement("strong",null,"$",h)," "),o.a.createElement("h6",{className:"valor-aproximado"},"Valor apr\xf3ximado del servicio")),h&&o.a.createElement("div",null,o.a.createElement("button",{onClick:a,variant:"contained",type:"button",class:"btn btn-outline-light"},"\xa1Siguiente!")))},f=function(){var e=Object(n.useState)(1),a=Object(c.a)(e,2),t=a[0],r=a[1];return o.a.createElement("div",null,1===t&&o.a.createElement(E,{nextStep:function(){return r(2)}}),2===t&&o.a.createElement(g,{nextStep:function(){return r(3)}}))};var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossOrigin:"anonymous"}),o.a.createElement("script",{src:"https://code.jquery.com/jquery-3.5.1.slim.min.js",integrity:"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",crossOrigin:"anonymous"}),o.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",integrity:"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",crossOrigin:"anonymous"}),o.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",integrity:"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",crossOrigin:"anonymous"}),o.a.createElement("img",{src:"https://domixpress-cdn.s3.amazonaws.com/img/domix-logo.png",className:"App-logo",alt:"logo"}),o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.50aa9d75.chunk.js.map