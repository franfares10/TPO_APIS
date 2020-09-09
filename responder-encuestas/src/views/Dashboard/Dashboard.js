import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/encuestasStyle.js";
import CardHeader from "components/Card/CardHeader";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Encuestas por responder</h4>
      </CardHeader>
      <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta Financiera</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
      </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Procesos</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Logística</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta Financiera</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
      </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Procesos</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Logística</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
        </div><div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta Financiera</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
      </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Procesos</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
        </div>
        <div className={classes.encuestaCard}>
            <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
            <div className ={classes.infoEncuestaCard}>
                <h4><b>Encuesta de Logística</b></h4>
                <p>Tiempo Restante: DD-HH:mm</p>
            </div>
            <button>RESPONDER ENCUESTA</button>
        </div>
      </div>
  );
}
