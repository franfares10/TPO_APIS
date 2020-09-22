import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from "utils/History/history";
import ItemCardImagen from "components/LoginComponents/ItemCardImagen"

import avatar from "assets/img/loguito.png";
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { blue } from '@material-ui/core/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    
        Your Website
    {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const pruebaObservatorio = {
  'user': 'paula',
  'contra': 'sarasa'
}

const pruebaEmpresa = {
  'user': 'tomas',
  'contra': 'malio'
}
const styles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fondo:{
      backgroundColor: '#FFFFFF'
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

const submitPressed = (event) => {
  event.preventDefault()

  let usuario = event.target.email.value;
  let password = event.target.password.value;

  if (usuario === pruebaObservatorio.user && password === pruebaObservatorio.contra) {
    history.push('/admin/dashboard')
  }
  if (usuario === pruebaEmpresa.user && password === pruebaEmpresa.contra) {
    history.push('/companyAdmin/dashboard')
  }
}

const SignUpPressed = () =>{
  history.push("/signin")
}

class SignIn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div classname={classes.fondo}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
        <div className="form-group" align="center" >
            <img src={avatar} width="130" height="120" align="center"></img>
        </div>
          <form className={classes.form} noValidate onSubmit={submitPressed} onSignUp={SignUpPressed}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="#187C7C" />}
              label="Remember me"
            />



            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#187C7C" 
              className={classes.submit}
            >
              Sign In
                  </Button>



            <Grid container >
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                    </Link>
              </Grid>
              <Grid item onClick ={
                () => SignUpPressed()
              }>    
                  {"Don't have an account? Solicita tu Cuenta"}
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);