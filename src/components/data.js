import React, { Component } from "react";


let nombre = document.getElementById("usuario");
let error = document.getElementById("password");
console.log(nombre);
console.log(error);

function usuarioLogged(props){
    return alert("El usuario se ha registrado corrrectamente")
}
function userIniciarSesion(props){
    return alert("Usted ha iniciado sesion")
}

function estado(props){
    const usuarioLoggeado=props.usuarioLoggeado;
    if(usuarioLoggeado){
        return usuarioLogged;
    }
    return userIniciarSesion;
}


/*
function enviarformulario(){
console.log("Enviando Formulario...");

let mensajeserror = [];
if(nombre.value === ""){
mensajeserror.push("Ingresa tu nombre");
}

error.innerHTML= mensajeserror.join("")

return false
}
*/

    
 var form = document.getElementById("formulario");
    form.addEventListener("button", function(evt){
    evt.preventDefault();
    console.log("enviando formulario111")
});

