import React, { useState, useEffect }  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle"
import estilos from "assets/jss/material-dashboard-react/components/customInputStyle.js";
import avatar from "assets/img/faces/marc.jpg";
import TextField from '@material-ui/core/TextField';
import {getPerfil,modificarPerfil} from "controller/login.controller";
import EditIcon from '@material-ui/icons/Edit';
import Snackbar from "components/Snackbar/Snackbar.js";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(styles,estilos);




export default function UserProfile() {
  const [data, setData] = useState({
    nombreUsuario: "",
    nombre:"",
    apellido: "",
    email: ""
});

const [notification, setNotification] = useState(false);
const[permitirActualizar,setPermitir] = useState(true);
const[estadoNUsuario,setEstadoNU] = useState(true);
const[estadoMail,setEstadoMail] = useState(true);
const[estadoNombre,setEstadoNombre] = useState(true);
const[estadoApellido,setEstadoApellido] = useState(true);
const [br,setBR] = React.useState(false)

const openNotification = () =>{
  setBR(true)
  setTimeout(()=>{setBR(false)},1500)
 
}

const closeNotification = () =>{
  setBR(false)
}
useEffect(()=>{
  peticionGet();
},[])

const peticionGet= async()=>{
    let usr = await getPerfil();
    setData(usr)
    console.log(data)
  }

const classes = useStyles();

const actualizarPerfil = async () =>{
    await modificarPerfil(data);
    peticionGet();
    postActualizar()
}

const postActualizar =()=>{
  setEstadoNombre(true)
    setEstadoNU(true)
    setEstadoApellido(true)
    setEstadoMail(true)
    setPermitir(true)
    setNotificacion(true)
}



function editVarios() {
  setEstadoApellido(false)
  setEstadoMail(false)
  setEstadoNU(false)
  setEstadoNombre(false)
  setPermitir(false)
}

function handleNombre(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: data.nombreUsuario,
  nombre: value,
  apellido: data.apellido,
  email: data.email,
  })
 
}

function handleChangeApellido(event) {
  var value = event.target.value;
  
  setData({ 
  nombreUsuario: data.nombreUsuario,
  nombre: data.nombre,
  apellido: value,
  email: data.email,
  })

}

function handleChangeUsuario(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: value,
  nombre: data.nombre,
  apellido: data.apellido,
  email: data.email,
  })

}

function handleChangeMail(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: data.nombreUsuario,
  nombre: data.nombre,
  apellido: data.apellido,
  email: value,
  })

}

function setNotificacion(condition) {
  setNotification({condition})
}



  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edite su perfil <EditIcon onClick={editVarios}/></h4>
              
              <p className={classes.cardCategoryWhite}>Complete su perfil</p>
            </CardHeader>
            <CardBody>
            
              <GridContainer>


              <GridItem xs={12} sm={12} md={6}>
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                      <div>
                        <TextField
                                  variant="outlined"
                                  label="Nombre Usuario"
                                  id="usuario"
                                  value={data.nombreUsuario}
                                  disabled= {estadoNUsuario}
                                  onChange={(event) => handleChangeUsuario(event)}
                                >
                               
                                </TextField>
                                </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                      <TextField
                                  variant="outlined"
                                  label="Mail"
                                  id="mail"
                                  value={data.email}
                                  disabled={estadoMail}
                                  onChange={(event) => handleChangeMail(event)}
                                />
                      </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}><div><p></p></div></GridItem>
                <GridItem xs={12} sm={12} md={12}><div><p></p></div></GridItem>
           
            <GridItem xs={12} sm={12} md={6}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                            variant="outlined"
                            label="Nombre"
                            id="nombre"
                            value={data.nombre}
                            disabled= {estadoNombre}
                            onChange={(event) => handleNombre(event)}
                          />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextField
                            variant="outlined"
                            label="Apellido"
                            id="apellido"
                            value={data.apellido}
                            disabled={estadoApellido}
                            onChange={(event) => handleChangeApellido(event)}
                          />
                </GridItem>
              </GridContainer>
              </GridItem>
              </GridContainer>
              
            </CardBody>
            <CardFooter>
              <Button disabled={permitirActualizar} color="primary" onClick={()=>{
                actualizarPerfil()
                openNotification()
                }}>Actualizar perfil</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
      
              <h4 className={classes.cardTitle}>{data.nombreUsuario}</h4>
            </CardBody>
          </Card>
        </GridItem>
        <Snackbar
                    place="br"
                    color="primary"
                    icon={CheckCircleIcon}
                    message="Perfil Actualizado"
                    open={br}
                    closeNotification={closeNotification}
                    close
                />
      </GridContainer>
    </div>
  );
                  }                 
                  
