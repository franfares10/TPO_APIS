import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/encuestasStyle.js";
import CardHeader from "components/Card/CardHeader";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Encuestas por responder</h4>
                </CardHeader>
        </GridItem>
    </GridContainer>
    <GridContainer justify={"center"}>
      <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta Financiera</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
      </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Procesos</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Logística</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta Financiera</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
      </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Procesos</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Logística</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
        </div><div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta Financiera</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
      </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Procesos</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Logística</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <Button color="primary">RESPONDER ENCUESTA</Button>
        </div>
        </GridContainer>
      </div>
  );
}
