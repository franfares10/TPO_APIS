import React from 'react';
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

import avatar from "assets/img/loguito.png";
import { whiteColor } from 'assets/jss/material-dashboard-react';
import { cyan } from '@material-ui/core/colors';


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

const pruebaObservatorio = {
  'user': 'paula',
  'contra': 'sarasa'
}

const pruebaEmpresa = {
  'user': 'tomas',
  'contra': 'malio'
}
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

const submitPressed = (event) => {
  event.preventDefault()

  let usuario = event.target.user.value;
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
      <ThemeProvider theme={tema}>
      <div classname={classes.fondo} >
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <div className={classes.paper}>
        <div className="form-group" align="center" >
            <img src={avatar} width="130" height="120" align="center"></img>
        </div>
          <form className={classes.form} noValidate onSubmit={submitPressed} onSignUp={SignUpPressed}>
            <ObsInput
              variant= "outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="User"
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
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<ObsCheckbox value="remember" color="#187C7C" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary" 
              className={classes.submit}
            >
              Sign In
                  </Button>



            <Grid container >
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidaste la contraseña?
                    </Link>
              </Grid>
              <Grid item onClick ={
                () => SignUpPressed()
              }>    
                  No posee usuario?<Link href="!"> Solicitar cuenta</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </div>
     </ThemeProvider>
      
    );
  }
}

export default withStyles(styles)(SignIn);