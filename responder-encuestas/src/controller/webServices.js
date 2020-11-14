const urlApi = "http://localhost:5000/";
console.log("url",urlApi);

const urlWebServices = {
    encuestas:urlApi +"api/encuestas",
    respuestas: urlApi + "bd/respuestas",
    respuestasUser: urlApi + "bd/respuestas/user/notCompleted",
    respuestaId: urlApi + "bd/respuestas/id",
    nuevaRespuesta: urlApi + "bd/insertRespuesta",
    actualizarRespuesta: urlApi + "bd/updateRespuesta",
    actualizarEncuesta: urlApi + "bd/updateEncuesta",
    uploadFile: urlApi + "bd/uploadFile",
    respondidas: urlApi + "bd/respondidas"
}

export default urlWebServices;