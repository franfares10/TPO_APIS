import React, {useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {getUserProfile, updateUserProfile} from "controller/appController"

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
  TextField: {
    marginTop: "2em"
  }
};

const useStyles = makeStyles(styles);

export default function CompanyProfile() {

  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  const [datos, setDatos] = React.useState({})
  const [email,setEmail] = React.useState()
  const [numTel,setNumTel] = React.useState()
  const [ciudad,setCiudad] = React.useState()
  const [zip,setZip] = React.useState()
  const [hist,setHist] = React.useState()
  const [mision,setMision] = React.useState()
  const [vision, setVision] = React.useState()

  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer profile
      let rdo = await getUserProfile(localStorage.getItem('id'));
      setDatos(rdo);
      setEmail(rdo.email)
      setNumTel(rdo.numTel)
      setCiudad(rdo.ciudad)
      setZip(rdo.zip)
      setHist(rdo.hist)
      setMision(rdo.mision)
      setVision(rdo.vision)
    }
    componentDidMount();
  },[]);

  const updateProfile = () => {
    updateUserProfile(localStorage.getItem('id'), email, numTel, ciudad, zip, hist, mision, vision)
  }

  const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

  const handleNumTelChange = (event) => {
    setNumTel(event.target.value);
  };

  const handleCiudadChange = (event) => {
    setCiudad(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleHistChange = (event) => {
    setHist(event.target.value);
  };

  const handleMisionChange = (event) => {
    setMision(event.target.value);
  };

  const handleVisionChange = (event) => {
    setVision(event.target.value);
  };

  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
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
        <GridItem xs={12} sm={9}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField
                    disabled
                    className={classes.TextField}
                    label="Nombre Empresa"
                    fullWidth="true"
                    value={datos.nombreEmpresa}
                    InputLabelProps={{shrink: true}}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <TextField
                    className={classes.TextField}
                    label="Email de contacto"
                    id="email"
                    fullWidth="true"
                    type="email"
                    value={email}
                    InputLabelProps={{shrink: true}}
                    onChange={handleEmailChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    className={classes.TextField}
                    label="Numero de Teléfono"
                    id="num"
                    fullWidth="true"
                    type="tel"
                    value={numTel}
                    InputLabelProps={{shrink: true}}
                    onChange={handleNumTelChange}
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
                    InputLabelProps={{shrink: true}}
                    value={ciudad}
                    onChange={handleCiudadChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    className={classes.TextField}
                    label="Código Postal"
                    id="zipCode"
                    fullWidth="true"
                    type="text"
                    InputLabelProps={{shrink: true}}
                    value={zip}
                    onChange={handleZipChange}
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
                    value={datos.razonSocial}
                    InputLabelProps={{shrink: true}}
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
                    multiline="true"
                    rows="5"
                    type="text"
                    InputLabelProps={{shrink: true}}
                    value={hist}
                    onChange={handleHistChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    className={classes.TextField}
                    label="Misión"
                    id="mision"
                    fullWidth="true"
                    multiline="true"
                    rows="5"
                    type="text"
                    InputLabelProps={{shrink: true}}
                    value={mision}
                    onChange={handleMisionChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    className={classes.TextField}
                    label="Visión"
                    id="vision"
                    fullWidth="true"
                    multiline="true"
                    rows="5"
                    type="text"
                    InputLabelProps={{shrink: true}}
                    value={vision}
                    onChange={handleVisionChange}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => {updateProfile(); showNotification("br")}}>Actualizar perfil</Button>
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
        <GridItem xs={6} sm={3}>
          <Card profile>
            <CardBody profile>
              <h4 className={classes.cardTitle}>{datos.nombreEmpresa}</h4>
              <h6 className={classes.cardCategory}>{datos.razonSocial}</h6>
              <h6 className={classes.cardCategory}>{ciudad}</h6>
              <p className={classes.description}>
                {zip}<br></br>
              </p>
              <p className={classes.description}>
                {email}<br></br>
                {numTel}<br></br>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
} 
