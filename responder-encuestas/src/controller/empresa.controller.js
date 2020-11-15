import urlWebServices from './webServices.js';
import history from "utils/History/history";

export const newEmpresa = async function(empresa){
     
    //url webservices
     let url = urlWebServices.newEmpresa;
     //armo json con datos
     const formData = new URLSearchParams();
     formData.append('nombreEmpresa', empresa.nombrEmpresa);
     formData.append('password', empresa.password);
     formData.append('razonSocial', empresa.razon);
     formData.append('CUIT', empresa.cuit);
     formData.append('responsable', empresa.responsable);
     formData.append('dni', empresa.dni);
     formData.append('email', empresa.email);
     formData.append('nombreApellido', empresa.nYAResponsable);
     formData.append('telefono', empresa.telResponsable);

     //console.log("dato",formData);
     //console.log("url",url);
     try
     {
         let response = await fetch(url,{
             method: 'POST', 
             mode: "cors",
             headers:{
                 'Accept':'application/x-www-form-urlencoded',
                 //'x-access-token': WebToken.webToken,
                 'Origin':'http://localhost:8080/',
                 'Content-Type': 'application/x-www-form-urlencoded'},
             body: formData
             
         });
         let data = await response.json();
         console.log("DATA")
         console.log(data)

}catch(error){
    console.log("ERROR"+error)
}
}

export const getEmpresas =  async function()
{
    
    //url webservices
    let url = urlWebServices.getEmpresas;

    try
    {
        let response = await fetch(url,{
            method: 'GET', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded'}
           
        
        });

        //console.log(response)
        let data = await response.json();
        let rdo = response.status;
       
        
        switch(rdo)
        {
            case 200:
            {

                var empresas = data.data.docs
                console.log("La empresa ha sido encontrada correctamente")
                return empresas;
            }
            case 202:
            {
                //error mail
                return ({rdo:1,mensaje:"Request aceptada"});
            }
            case 203:
            {
                //error password
                return ({rdo:1,mensaje:"No posee autorizacion para esta accion."});
            }
            case 204:{
                return ({rdo:1,mensaje:"No existe contenido."})
            }
            default:
            {
                //otro error
                return ({rdo:1,mensaje:"Ha ocurrido un error"});                
            }
        }
    } catch(error)
    {
        console.log("ERROR: ",error);
    };
}


export const getEmpresaPorId =  async function(idEmpresa)
{
    
    const formData = new URLSearchParams();
    formData.append('id', idEmpresa);
    //url webservices
    let url = urlWebServices.getEmpresaPorId;

    try
    {
        let response = await fetch(url,{
            method: 'POST', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData,
        
        });

        //console.log(response)
        let data = await response.json();
        let rdo = response.status;
       
        
        switch(rdo)
        {
            case 200:
            {
                var empresa = data.data;
                //console.log(empresa)
                return empresa;
            }
            case 202:
            {
                //error mail
                return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
            }
            case 203:
            {
                //error password
                return ({rdo:1,mensaje:"La contraseña no es correcta."});
            }
            default:
            {
                //otro error
                return ({rdo:1,mensaje:"Ha ocurrido un error"});                
            }
        }
    } catch(error)
    {
        console.log("error",error);
    };
}