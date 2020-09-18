import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  TextField:{
    marginTop: "2em"
  }
};

let state = {
  email: ""
}

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [value, setValue] = React.useState(null);
  let estado = state;

  const controladorEstado = input => {
    estado.email=input;
  }

  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function() {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function() {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function() {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function() {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function() {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function() {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
              <p className={classes.cardCategoryWhite}>Complete su perfil</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField
                  className={classes.TextField}
                    label="Empresa"
                    id="company-disabled"
                    fullWidth="true"
                    disabled="true"
                    type="text"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <TextField
                  className={classes.TextField}
                    label="Email de contacto"
                    id="email"
                    fullWidth="true"
                    type="email"
                    value={value}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  className={classes.TextField}
                    label="Numero de Teléfono"
                    id="num"
                    fullWidth="true"
                    type="tel"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    className={classes.TextField}
                    label="Ciudad"
                    id="city"
                    fullWidth="true"
                    type="text"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  className={classes.TextField}
                    label="Código Postal"
                    id="zipCode"
                    fullWidth="true"
                    type="text"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  className={classes.TextField}
                    label="Razón Social"
                    id="postal-code"
                    fullWidth="true"
                    disabled="true"
                    type="text"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  className={classes.TextField}
                    label="Historia"
                    id="about-me"
                    fullWidth="true"
                    multiline= "true"
                    rows= "5"
                    type="text"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  className={classes.TextField}
                    label="Misión"
                    id="mision"
                    fullWidth="true"
                    multiline= "true"
                    rows= "5"
                    type="text"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                  className={classes.TextField}
                    label="Visión"
                    id="vision"
                    fullWidth="true"
                    multiline= "true"
                    rows= "5"
                    type="text"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => showNotification("br")}>Actualizar perfil</Button>
              <Snackbar
                        place="br"
                        color="primary"
                        icon={CheckCircleIcon}
                        message="Perfil Actualizado"
                        open={br}
                        closeNotification={() => setBR(false)}
                        close
                    />
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
              <h4 className={classes.cardTitle}>PyMe Ejemplo</h4>
              <h6 className={classes.cardCategory}>SA</h6>
              <h6 className={classes.cardCategory}>CABA</h6>
              <p className={classes.description}>
                1000<br></br>
              </p>
              <p className={classes.description}>
                ejemplo@ejemplo.com<br></br>
                Tel: 0000-0000<br></br>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
