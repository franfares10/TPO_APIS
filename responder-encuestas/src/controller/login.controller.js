import urlWebServices from './webServices.js';
import history from "utils/History/history";
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
        console.log("DATA")
        console.log(data)
        let flag = data.loginUser.user.flag;
        console.log("jsonresponse",data);
            switch(flag)
            {
                case 0:
                {
                    
                    history.push("/admin/dashboard");
                    return ({flag:0,mensaje:"Ok OBSERVATORIO"});//correcto
                }
                case 1:
                {
                    history.push("/companyAdmin/dashboard");
                    //error mail
                    return ({flag:1,mensaje:"OK EMPRESA"});
                }
               
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}



