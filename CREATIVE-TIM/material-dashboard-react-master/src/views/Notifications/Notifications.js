/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
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
    marginTop: "0px",
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
  }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
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
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notifications</h4>
       
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <br />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent
              message={
                'PRIMARY - A User has started the poll'
              }
              close
              color="primary"
            />
            <SnackbarContent
              message={
                'SUCCESS - The poll has ended Successfully'
              }
              close
              color="success"
            />
            <SnackbarContent
              message={
                'WARNING - The poll is going to finish in a week'
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                'DANGER - The poll is going to finish tomorrow'
              }
              close
              color="danger"
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />


   
        <GridContainer justify={"center"}>
         
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("br")}
                >
                 Show Notification
                </Button>
                <Snackbar
                  place="br"
                  color="primary"
                  icon={AddAlert}
                  message="Welcome to Observatorio Pyme"
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
      </CardBody>
    </Card>
  );
}
