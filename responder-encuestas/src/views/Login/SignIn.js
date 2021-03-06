import React, { useState, useEffect } from "react";
import Button from 'components/CustomButtons/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, styled, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from "utils/History/history";
import ItemCardImagen from "components/LoginComponents/ItemCardImagen"
import {login} from "controller/login.controller";
import avatar from "assets/img/loguito.png";
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { cyan } from '@material-ui/core/colors';
import Snackbar from "components/Snackbar/Snackbar.js";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import estilos from "assets/jss/material-dashboard-react/views/dashboardStyle"
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    
        Responder Encuestas
    {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const ObsCheckbox = withStyles({
  root: {
      color: [400],
      '&$checked': {
          color: cyan[600],
      },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const ObsInput = withStyles({
  root: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: cyan[600]
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "grey"
    }
  },
  after: {},
})((props) => <TextField {...props} />);

const tema=createMuiTheme({
  overrides:{
    MuiCssBaseline:{
      '@global':{
        ".MuiContainer-root":{
          width: '100%',
          display: 'block',
          boxSizing: 'border-box',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop:'200px'
        }
      }
    }
  }
})
const styles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fondo:{
      backgroundColor: '#FFFFFF',
      marginTop:'-23px !important'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: whiteColor,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

const useStyles = makeStyles(styles,estilos);
 
 
 


export default function SignIn(){
const[br,setBR] = useState(false)
const[usuarioValido,setUsuarioValido]=React.useState(false);
const [email,setEmail]=React.useState('');
const[password,setPassword]=React.useState('');
 const[mensaje,setMensaje] = React.useState('')    
const classes = useStyles;

const handleEmail=(event)=>{
    setEmail(event.target.value);
}
const handlePassword=(event)=>{    
    setPassword(event.target.value);
}
 const submitPressed= async function(event)
 {
  event.preventDefault()
     let datos = {
      usuario :  event.target.user.value,
      password : event.target.password.value
     }

     try{
     if(datos.usuario!=="" && datos.password!==""){
          let getLogin = await login(datos);
        if(getLogin===undefined){
          setMensaje("Usuario o Contraseña incorrecto")
          openNotification()
      
        }
          
       }else
       {
         setMensaje("Debe completar usuario y password")
         openNotification()
       }
  
      }catch(e){
        console.log(e)
      
      }
}
const openNotification = () =>{
  setBR(true)
  setTimeout(()=>{setBR(false)},1500)
 
}

const closeNotification = () =>{
  setBR(false)
}

    return (
      <ThemeProvider theme={tema}>
      <div classname={classes.fondo}>
     
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <div className={classes.paper}>
        <div className="form-group" align="center" >
            <img src={avatar} width="130" height="120" align="center"></img>
        </div>
          <form className={classes.form} noValidate onSubmit={submitPressed}>
            <ObsInput
              variant= "outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="user"
              autoComplete="user"
              autoFocus
            />
            <ObsInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary" 
              className={classes.submit}
            >
              Iniciar Sesión
                  </Button>
            <Grid container >
              
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        <Snackbar
                    place="br"
                    color="danger"
                    icon={CheckCircleIcon}
                    message={mensaje}
                    open={br}
                    closeNotification={closeNotification}
                    close
                />
      </Container>
      </div>
     </ThemeProvider>
     
      
    );
  }
