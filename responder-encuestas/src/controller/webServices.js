const urlApi = "http://localhost:5000/";
console.log("url",urlApi);

const urlWebServices = {
    encuestas:urlApi +"api/encuestas",
    respuestas: urlApi + "bd/respuestas",
    respuestasUser: urlApi + "bd/respuestas/user",
    respuestaId: urlApi + "bd/respuestas/id",
    nuevaRespuesta: urlApi + "bd/insertRespuesta",
    actualizarRespuesta: urlApi + "bd/updateRespuesta"
}

export default urlWebServices;