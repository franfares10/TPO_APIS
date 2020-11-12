import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from 'components/CustomButtons/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Snackbar from "components/Snackbar/Snackbar.js";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from 'utils/History/history'
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import {newEmpresa} from "controller/empresa.controller"
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const signUpPressed = async function(event){
  let nombrEmpresa = event.target.nomEmpr.value
  let email = event.target.emailResponsable.value
  let cuit = event.target.cuit.value
  let razon = event.target.razSoc.value
  let nYAResponsable = event.target.nYAResp.value
  let telResponsable = event.target.telResp.value
  let password = event.target.contra.value
  let dni = event.target.dniResp.value

  var nuevaEmpresa = {
    nombrEmpresa,
    password,
    razon,
    cuit,
    email,
    nYAResponsable,
    telResponsable,
    dni

  }

  if(nombrEmpresa!=="" && cuit!=="" && razon!=="" && nYAResponsable!=="" && password!=="" && dni!==""){
      let register = await newEmpresa(nuevaEmpresa);
      event.target.nomEmpr.value = ""
      event.target.cuit.value = ""
      event.target.razSoc.value = ""
      event.target.nYAResp.value = ""
      event.target.telResp.value = ""
      event.target.contra.value = ""
      event.target.dniResp.value = ""
      
  }else{
    alert("Debe completar todos los campos");
  }
}

export default function SignUp() {
  const classes = useStyles();
  const [br,setBR] = React.useState(false)

  const openNotification = () =>{
    setBR(true)
   
  }
  
  const closeNotification = () =>{
    setBR(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Solicitar Cuenta
        </Typography>
        <form className={classes.form} noValidate onSubmit={signUpPressed}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ObsInput
                name="nomEmpr"
                variant="outlined"
                required
                fullWidth
                id="nomEmpr"
                label="Nombre de Empresa"
                autoFocus
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                id="razSoc"
                label="Razón Social"
                name="razSoc"
              />
            </Grid>
            <Grid item xs={12}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                id="cuit"
                label="CUIT"
                name="cuit"
              />
              </Grid>
              <Grid item xs={12}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                id="contra"
                label="Contraseña"
                name="Contraseña"
              />
            </Grid>
            <Grid item xs={12}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                name="nYAResp"
                label="Nombre y Apellido del responsable"
                id="nYAResp"
              />
            </Grid>
            <Grid item xs={12}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email del responsable"
                id="emailResponsable"
              />
            </Grid>
            <Grid item xs={12}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                name="telResp"
                label="Teléfono del responsable"
                id="telResp"
              />
            </Grid>
            <Grid item xs={12}>
              <ObsInput
                variant="outlined"
                required
                fullWidth
                name="dniResp"
                label="DNI del responsable"
                id="dniResp"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel 
                control={<ObsCheckbox value="allowExtraEmails"/>}
                label="Quiero recibir mails del Observatorio PyMe regularmente"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick ={openNotification}
          >
            Solicitar Cuenta
          </Button>
          <Snackbar
                    place="br"
                    color="primary"
                    icon={CheckCircleIcon}
                    message="Empresa Agregada"
                    open={br}
                    closeNotification={closeNotification}
                    close
                />
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}