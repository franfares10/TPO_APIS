import { eliminarEmpresasDeEncuesta } from "./login.controller";

const urlApi = "http://localhost:8080/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    newEmpresa:urlApi+ "api/empresas/newEmpresa",
    getEncuestasDeLaBDD:urlApi + "api/encuestas/encuestasDeLaBDD",
    getUsersById: urlApi + "api/users/usuarioPorId",
    getEncuestasLanzadas: urlApi + "api/lanzamientoEncuesta/encuestasLanzadas",
    getEncuestaPorId: urlApi + "api/encuestas/encuestaPorId",
    getEmpresas: urlApi + "api/empresas/empresas",
    modificarPerfil: urlApi + "api/users/actualizarPerfil",
    lanzarEncuesta: urlApi + "api/lanzamientoEncuesta/newLanzarEncuesta",
    getEmpresaPorId: urlApi + "api/empresas/empresaPorId",
    enviarMail: urlApi + "api/users/sendMail",
    eliminarEmpresasDeEncuesta: urlApi+"api/lanzamientoEncuesta/encuestasLanzadas/update",
    //guardarImgUser: urlApi + "api/users/guardarImgUser",
    //getImgUser: urlApi + "api/users/imgUserByMail",
    //uploadFileImg: urlApi + "api/users/uploadImg",


    //RUTAS LEO Y LUCAS http://localhost:5000/
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