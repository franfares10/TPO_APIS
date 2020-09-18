var listaUsuariosNombre=["ivan","pepe"];
var listaContraseñasUsuario=["contraseña123","contraseña456"];
var listaEmailUsuarios=["ivan@gmail.com","pepe@gmail.com"];
console.log("log de prueba")
var valorUsuario=document.getElementById("usuario").nodeValue;
var contraseñaUsuario=document.getElementById("contraseña").nodeValue;
console.log("usuario" + valorUsuario)
console.log("contra"+contraseñaUsuario)
console.log("El user es" +valorUsuario+"y la contraseña es" +contraseñaUsuario)



function capturarSignIn(){
    var primerNombre=document.getElementById("inputPrimerNombre").nodeValue+" "+document.getElementById("inputApellido").nodeValue;
    listaUsuariosNombre.push(primerNombre)
    var email=document.getElementById("inputEmail").nodeValue;
    listaEmailUsuarios.push(email);
    var contraseña=document.getElementById("inputContraseña").nodeValue;
    listaContraseñasUsuario.push(contraseña)


}
