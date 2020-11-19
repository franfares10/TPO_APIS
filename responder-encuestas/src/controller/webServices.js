import { eliminarEmpresasDeEncuesta } from "./login.controller";

const urlApi = "http://localhost:8080/";
const urlBD = "http://localhost:8080/api/"

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
    eliminarLanzamiento: urlApi + "api/encuestasLanzadas/delete",
    //guardarImgUser: urlApi + "api/users/guardarImgUser",
    //getImgUser: urlApi + "api/users/imgUserByMail",
    //uploadFileImg: urlApi + "api/users/uploadImg",


    //RUTAS LEO Y LUCAS http://localhost:5000/ --> Las pasamos al 8080 porque sino nos tira error de puerto y conexion.
    encuestas:urlBD +"encuestas/LL",
    respuestas: urlBD + "bd/respuestas",
    respuestasUser: urlBD + "bd/respuestas/user/notCompleted",
    respuestaId: urlBD + "bd/respuestas/id",
    nuevaRespuesta: urlBD + "bd/insertRespuesta",
    actualizarRespuesta: urlBD + "bd/updateRespuesta",
    actualizarEncuesta: urlBD + "bd/updateEncuesta",
    uploadFile: urlBD + "bd/uploadFile",
    respondidas: urlBD + "bd/respondidas",
    eliminarRespuesta: urlBD + "bd/eliminarRespuesta",
    obtenerRespuesta: urlBD + "bd/obtenerRespuesta",
    getUserProfile: urlBD + "bd/getUser",
    updateUserProfile: urlBD + "bd/updateProfile"
}

export default urlWebServices;