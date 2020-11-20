import urlWebServices from './webServices.js';
import history from "utils/History/history";
import { getEncuestaPorId } from "controller/encuestas.controller";


/*export const signup= async function(signup)
{
    //url webservices
    let url = urlWebServices.signup;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', signup.email);
    formData.append('password', signup.password);
    //console.log("dato",formData);
    //console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                //'Origin':'https://apis-backend.herokuapp.com/',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        

        PONER EN EL LOGIN
        let rdo = response.status;
        console.log("RESPUESTA",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.loginUser.token);
                    //guardo usuario logueado
                    let user = data.loginUser.user;
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("email",user.email);
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
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
    }
    catch(error)
    {
        console.log("error",error);
    };
}*/

export const login =  async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('user', login.usuario);
    formData.append('password', login.password);
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

        
        console.log("USUARIO GET",response);
        let data = await response.json();
        let rdo = response.status;
        console.log("DATA")
        console.log(data)
        let flag = data.loginUser.user.flag;
        console.log("jsonresponse",data);

           

            switch(flag)
            {
                case 0:
                {
                    switch(rdo)
                    {
                        case 201:
                        {
                            
                            //guardo token
                            localStorage.setItem("x",data.loginUser.token);
                            //guardo usuario logueado
                            let user = data.loginUser.user;
                            console.log(user._id)
                            
                            //localStorage.setItem("user",user);
                           // console.log("ID")
                           // console.log(user._id)
                            localStorage.setItem("id",user._id);
                            history.push("/admin/dashboard");
                            return ({rdo:0,mensaje:"Ok"});//correcto
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
                }
                case 1:
                {
                    switch(rdo)
                    {
                        case 201:
                        {
                            //guardo token
                            localStorage.setItem("x",data.loginUser.token);
                            //guardo usuario logueado
                            let user = data.loginUser.user;
                            console.log("ID")
                            console.log(user._id)
                            localStorage.setItem("id",user.idEmpresa);
                            localStorage.setItem("idFRANIVAN",user._id)
                            history.push("/companyAdmin/dashboard");
                            return ({rdo:0,mensaje:"Ok"});//correcto
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
                }
               
            }
           
 
    }
    catch(error)
    {
        console.log("error",error);
    };
}


export const modificarPerfil = async function(usuarioNuevo){
    const formData = new URLSearchParams();
    formData.append('id', localStorage.getItem("id").toString());
    formData.append('nombreUsuario', usuarioNuevo.nombreUsuario);
    formData.append('email', usuarioNuevo.email);
    formData.append('nombre', usuarioNuevo.nombre);
    formData.append('apellido', usuarioNuevo.apellido);
    console.log("USUARIO NUEVOO")
    console.log(usuarioNuevo)
    let url = urlWebServices.modificarPerfil;

    try
    {
        let response = await fetch(url,{
            method: 'PUT', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData,
        
        });

        let data = await response.json();
        let rdo = response.status;
        console.log("DATAAAAA")
        console.log(data)
       
        
        switch(rdo)
        {
            case 200:
            {
                return ({rdo:0,mensaje:"Usuario actualizado exitosamente"});
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




export const getPerfil =  async function()
{
    
    const formData = new URLSearchParams();
    formData.append('id', localStorage.getItem("id").toString());
    //url webservices
    let url = urlWebServices.getUsersById;

    console.log("dato",formData.toString());
    console.log("url",url);
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

        console.log(response)
        let data = await response.json();
        let rdo = response.status;
       
        
        switch(rdo)
        {
            case 200:
            {
                var user = data.data;
                return user;
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


/*const embeberEncuestas = async function(listLanzamientos){
    
    listLanzamientos.map(element =>{
        element = await getEncuestaPorId(element.idEncuesta)
    })
    return listLanzamientos;
}*/

export const getLanzadasPorUsuario = async function(setListEncuestas) {
     const id = localStorage.getItem("id").toString()
     let url = urlWebServices.getEncuestasLanzadas;
    
     try
    {
        let response = await fetch(url,{
            method: 'GET', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded',
                'idUsuario': id.toString()
            }
        
        });

        //console.log(response)
        let data = await response.json();
        let rdo = response.status;
      
        
        switch(rdo)
        {
            case 200:
            {
                var encuestas = data.data;
               // console.log(encuestas[0].idEncuesta)
                //console.log(encuestas)
               
            
                setListEncuestas(encuestas)
                //console.log(encuestas)

                return ({rdo:0,mensaje:"Ok"});
            }
            case 404:
            {
                //error mail
                return ({rdo:1,mensaje:"No existen encuestas especificas a ese usuario."});
            }
            case 400:
            {
                //error password
                return ({rdo:2,mensaje:"La solicitud de pedido de datos no es correcta."});
            }
            default:
            {
                //otro error
                return ({rdo:1,mensaje:"Ha habido un problema en el servidor"});                
            }
        }
    } catch(error)
    {
        console.log("El error ha sido: ",error);
    };
}




export const nuevoLanzamiento = async function(listaEmpresas,encuesta){
     
    //url webservices
     let url = urlWebServices.lanzarEncuesta;
     //armo json con datos
     const formData = new URLSearchParams();
     formData.append('idUsuario',localStorage.getItem("id").toString());
     formData.append('idEncuesta',encuesta);
     formData.append('responsable',{"nombre":"jose"});
     formData.append('fechaVencimiento',"2021/5/21");
     formData.append('listaEmpresasLanzadas',JSON.stringify(listaEmpresas));
     console.log("form data: ",formData.get('listaEmpresasLanzadas'))
     
    
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



export const enviarMailDeEncuesta = async function(mailEmpresa){
     
    //url webservices
     let url = urlWebServices.enviarMail;
     //armo json con datos
     const formData = new URLSearchParams();
     formData.append('destinatario',mailEmpresa);
    formData.append('asunto' , "Se le ha enviado una nueva encuesta a responder")
    formData.append('texto' , "esta es  una encuesta del observatorio pyme")
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

export const eliminarEmpresasDeEncuesta= async function(idEmpresa,idEncuesta){
    try{
        let url=urlWebServices.eliminarEmpresasDeEncuesta;  //Defino la url que le pega a este servicio en especifico.

        const formData=new URLSearchParams();
        
       formData.append('idEmpresa',idEmpresa);
       formData.append('idEncuesta',idEncuesta);

    
        
        let response = await fetch(url,{
            method: 'PUT', 
            mode: "cors", 
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded',
                'flag':2},
                
            body: formData
            
        });
        let data = await response.json();
        console.log("Estado de la encuesta luego de haber sido actualizada: ",data)
    }catch(e){
        console.log("Error al actualizar la  encuesta con el id: ",idEncuesta," el error fue: ", e)
    }
}

export const encuestasUser = async function () {
    console.log("llegaste a encuestasUser")
    let url = urlWebServices.respuestasUser
    const formData = new URLSearchParams();
    const idFranIvan = localStorage.getItem('idFRANIVAN').toString()
    const id = localStorage.getItem("id").toString()
    console.log("IDDDDDDD")
    console.log(id)
    formData.append('userId', idFranIvan);
    var PORT_CONTROLLER=8080
    try{
        let response = await fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:'+PORT_CONTROLLER,
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        });
        console.log(response)
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            return data
        }
        else {
            let vacio = []
            console.log("No hay respuestas")
            return vacio
        }
    }
    catch (error) {
        console.log("error", error)
    }
}

export const encuestasUserCompany = async function () {
    console.log("llegaste a encuestasUser")
    let url = urlWebServices.respuestasUser
    const formData = new URLSearchParams();
    const idFranIvan = localStorage.getItem('idFRANIVAN').toString()
    const id = localStorage.getItem("id").toString()
    console.log("IDDDDDDD")
    console.log(id)
    formData.append('userId', id);
    var PORT_CONTROLLER=8080
    try{
        let response = await fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:'+PORT_CONTROLLER,
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        });
        console.log(response)
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            return data
        }
        else {
            let vacio = []
            console.log("No hay respuestas")
            return vacio
        }
    }
    catch (error) {
        console.log("error", error)
    }
}

export const eliminarLanzamiento = async function(idLanzamiento){
    try{
        let url=urlWebServices.eliminarLanzamiento;  //Defino la url que le pega a este servicio en especifico.

        
        let response = await fetch(url,{
            method: 'DELETE', 
            mode: "cors", 
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded',
                'flag':2,
            'idLanzamiento':idLanzamiento},
                
        
            
        });
        let data = await response.json();
        console.log("Estado de la encuesta luego de haber sido actualizada: ",data)
    }catch(e){
        console.log("Error al actualizar el lanzamiento con el id: ",idLanzamiento," el error fue: ", e)
    }
}

export const getLanzamientoById = async function (id)
{
    try{
        let url=urlWebServices.getLanzamientoById;  //Defino la url que le pega a este servicio en especifico.
        const formData = new URLSearchParams();
        formData.append('id', id)
        let response = await fetch(url,{
            method: 'POST', 
            mode: "cors", 
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                //'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8080/',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });
        let data = await response.json();
        return data
    }catch(e){
        console.log("Error al buscar lanzamiento", e)
    }
}
