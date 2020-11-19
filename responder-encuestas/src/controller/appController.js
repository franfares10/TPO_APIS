import urlWebServices from './webServices';

export const encuestasUser = async function () {
    console.log("llegaste a encuestasUser")
    let url = urlWebServices.respuestasUser
    const formData = new URLSearchParams();
    formData.append('userId', "5fb525cc5e8f811ab08f0356");
    var PORT_CONTROLLER = 8080
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:' + PORT_CONTROLLER,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
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

export const encuestaPorId = async function () {
    let url = urlWebServices.respuestaId;
    const formData = new URLSearchParams();
    formData.append('idEncuesta', localStorage.getItem('idEncuesta'))
    console.log("form data lista")
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:8080',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        console.log("response traido")
        console.log(response)
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            console.log(data)
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

export const updateRespuesta = async function (questionIndex, value) {
    let url = urlWebServices.actualizarRespuesta;
    const formData = new URLSearchParams();
    formData.append('idEncuesta', localStorage.getItem('idEncuesta'))
    formData.append('questionIndex', questionIndex)
    formData.append('value', value)
    console.log(localStorage.getItem('idEncuesta'), questionIndex, value)
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:8080',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            return data
        }
        else {
            console.log("Error")
        }
    }
    catch (error) {
        console.log("error", error)
    }
}

export const updateEncuesta = async function () {
    let url = urlWebServices.actualizarEncuesta
    const formData = new URLSearchParams()
    formData.append('idEncuesta', localStorage.getItem('idEncuesta'))
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:8080',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            return data
        }
        else {
            console.log("Error")
        }
    } catch (error) {
        console.log("error", error)
    }
}

export const uploadFile = async function (files) {
    let url = urlWebServices.uploadFile;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i])
    }
    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/form-data',
                'Origin': 'http://localhost:8080',
                //'Content-Type': 'application/form-data'
            },
            body: formData
        });

        let archivo = await response.json()
        console.log('respuestaUpload', archivo);
        return archivo;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }

}

export const respondidas = async function () {
    let url = urlWebServices.respondidas;
    const formData = new URLSearchParams();
    formData.append('idEncuesta', localStorage.getItem('idEncuesta'))
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:8080',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
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

export const eliminarRespuesta = async function (idEncuesta, idEmpresa, idLanzamiento) {
    let url = urlWebServices.eliminarRespuesta;
    const formData = new URLSearchParams();
    formData.append('idEncuesta', idEncuesta)
    formData.append('idEmpresa', idEmpresa)
    formData.append('idLanzamiento', idLanzamiento)
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:8080',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            return data
        }
    }
    catch (error) {
        console.log("error", error)
    }
}

export const respuestaPorId = async function (idLanzamiento,idEmpresa) {
    let url = urlWebServices.obtenerRespuesta;

    const formData = new URLSearchParams();
    formData.append('idLanzamiento',idLanzamiento)
    formData.append('idEmpresa',idEmpresa)

    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'Origin': 'http://localhost:8080',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        console.log("response traido")
        console.log(response)
        if (response.status === 200) {
            let data = await response.json()
            //console.log("respuestasUser", data)
            //let listResp = data.result
            console.log(data)
            return data
        }
        
    }
    catch (error) {
        console.log("error", error)
    }
}