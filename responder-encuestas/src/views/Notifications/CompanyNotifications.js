import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "10px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  titulo: {
    paddingLeft: "10px",
    paddingTop: "0px",
    marginTop: "0"
},
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();

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
  
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.titulo}>Notificaciones</h4>
       
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <br />
            <SnackbarContent
              message={
                'Observatorio PyMe lo ha invitado a responder una encuesta'
              }
              close
              color="primary"
            />
            <SnackbarContent
              message={
                'RECORDATORIO - El plazo habilitado para responder la encuesta: "Encuesta Financiera" es de 5 días'
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                'AVISO - El plazo habilitado para responder la encuesta: "Encuesta de Procesos" finaliza mañana'
              }
              close
              color="danger"
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
      </CardBody>
    </Card>
  );
}