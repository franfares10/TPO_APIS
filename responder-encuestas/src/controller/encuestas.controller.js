import urlWebServices from './webServices.js';
import history from "utils/History/history";

export const getEncuestas =  async function(setListEncuestas)
{
    //url webservices
    let url = urlWebServices.getEncuestasDeLaBDD;
    //armo json con datos
    
    try
    {
        let response = await fetch(url,{
            method: 'GET', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded'},
            
        });

        //console.log("Encuestas GET",response);
        let data = await response.json();
        let rdo = response.status;
       // console.log("DATA")
       // console.log(data)
       
        switch(rdo)
        {
            case 200:
            {
                //console.log(data.data.docs)
                //guardo encuestas
                //localStorage.setItem("encuestasDeLaBDD",data.data.docs); 
                setListEncuestas(data.data.docs)
                
                return ({rdo:0,mensaje:"Encuestas traidas correctamente de la base de datos"});//correcto
            }
            case 203:{
                return ({rdo:1,mensaje:"No posee autorizacion para realizar este llamado."})
            }

            case 400:
            {
                //error mail
                return ({rdo:1,mensaje:"Ha ocurrido un error al realizar la accion, chequee los parametros de envio."});
            }
            case 404:
            {
                //error password
                return ({rdo:1,mensaje:"No se encontraron encuestas"});
            }
            default:
            {
                //otro error
                return ({rdo:1,mensaje:"Ha ocurrido un error"});                
            }
        }


    }
    catch(error)
    {
        console.log("ERROR: ",error);
    };
}

export const getEncuestaPorId =  async function(idEncuesta)
{
    const formData = new URLSearchParams();
    formData.append('id',idEncuesta);

    //url webservices
    let url = urlWebServices.getEncuestaPorId;
   
   
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
                var encuesta = data.data;
                //console.log("ENCUESTAAAAA"+encuesta)
                return encuesta;
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

export const getPreguntasById = async function(idEncuesta)
{
    const formData = new URLSearchParams();
    formData.append('id',idEncuesta);
    let url = urlWebServices.getPreguntasById;

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
        return data.data
    }catch(e){
        console.log(e)
    }
}