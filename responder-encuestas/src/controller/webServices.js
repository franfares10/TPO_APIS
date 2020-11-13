
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
    modificarPerfil: urlApi + "api/users/actualizarPerfil"
    //uploadFileImg: urlApi + "utils/uploadImg",
    //guardarImgUser: urlApi + "api/users/guardarImgUser",
    //getImgUser: urlApi + "api/users/imgUserByMail",
    //uploadFileImg: urlApi + "api/users/uploadImg",
}

export default urlWebServices;