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
import avatar from "assets/img/faces/marc.jpg";
import {getPerfil} from "controller/login.controller";

const useStyles = makeStyles(styles);




export default function UserProfile() {
  const [data, setData] = useState({
    nombreUsuario: "",
    nombre:"",
    apellido: "",
    email: "",
});

const [editarVarios, setEditarVarios] = useState(true);
const [notification, setNotification] = useState(false);



useEffect(()=>{
  peticionGet();
},[])

const peticionGet= async()=>{
    let usr = await getPerfil();
    setData(usr)
    console.log(data)
  }

const classes = useStyles();

/*
const peticionPost=async()=>{
  await axios.put(baseURL + JSON.parse(localStorage.getItem('usuario')).usuario,data)
  .then(response=>{
    console.log(data);
    console.log("",response);
    setNotification(true);
    setEditarVarios(true)
  }).catch(error=>{
    console.log(data);
    console.log(baseURL + JSON.parse(localStorage.getItem('usuario')).usuario);
    console.log(error);
  })
}

function editVarios() {
  var value = editarVarios ? false : true;
  console.log(value);
  setEditarVarios(value);
}

function handleNombre(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: data.usuario,
  nombre: value,
  apellido: data.apellido,
  mail: data.mail,
  })
}

function handleChangeApellido(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: data.usuario,
  nombre: value,
  apellido: data.apellido,
  mail: data.mail,
  })
}

function handleChangeUsuario(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: data.usuario,
  nombre: value,
  apellido: data.apellido,
  mail: data.mail,
  })
}

function handleChangeMail(event) {
  var value = event.target.value;
  setData({ 
  nombreUsuario: data.usuario,
  nombre: value,
  apellido: data.apellido,
  mail: data.mail,
  })
}

function setNotificacion(condition) {
  setNotification({condition})
}
*/


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edite su perfil</h4>
              <p className={classes.cardCategoryWhite}>Complete su perfil</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    disabled="true"
                    labelText={data.nombreUsuario}
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    disabled={true}
                    labelText={data.email}
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    disabled
                    labelText={data.nombre}
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    disabled
                    labelText={data.apellido}
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              
            </CardBody>
            <CardFooter>
              <Button color="primary">Actualizar perfil</Button>
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
      </GridContainer>
    </div>
  );
                  }                 
                  
