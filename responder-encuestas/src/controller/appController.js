import urlWebServices from './webServices';

export const encuestasUser = async function()
{
    let url = urlWebServices.respuestasUser
    const formData = new URLSearchParams();
    formData.append('userId', 13);

    try{
        let response = await fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:5000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData
        });
        if(response.status===200)
        {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            return data
        }
        else
        {
            let vacio = []
            console.log("No hay respuestas")
            return vacio
        }
    }
    catch(error)
    {
        console.log("error", error)
    }
}