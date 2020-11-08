import { makeStyles } from "@material-ui/core";
import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
<<<<<<< Updated upstream:responder-encuestas/src/layouts/Encuesta.js
import Pades from 'components/Preguntas/preguntaText'
import Pradio from 'components/Preguntas/preguntaRadio'
import Pselect from 'components/Preguntas/preguntaSelect'
import Pcheck from 'components/Preguntas/preguntaCheck'
import Pfile from 'components/Preguntas/preguntaUpload'
import Pdate from 'components/Preguntas/preguntaDate'
=======
import SendIcon from '@material-ui/icons/Send';
import Pades from 'components/Preguntas/PreguntaText'
import Pradio from 'components/Preguntas/PreguntaRadio'
import Pselect from 'components/Preguntas/PreguntaSelect'
import Pcheck from 'components/Preguntas/PreguntaCheck'
import Pfile from 'components/Preguntas/PreguntaUpload'
import Pdate from 'components/Preguntas/PreguntaDate'
>>>>>>> Stashed changes:responder-encuestas/src/views/Dashboard/Encuesta.js

const styles = {
    pyrCard: {
        height: '250px',
        width: '600px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        paddingTop: '20px',
        margin: '2em',
        "& h4": {
            fontSize: '150%'
        },
    },

    fabGys: {
        color: "white",
        backgroundColor: "rgb(30, 154, 159)",
        position: "fixed",
        bottom: "20px",
        right: "10px"
    },
    fabEnv: {
        color: "white",
        backgroundColor: "rgb(30, 154, 159)",
        position: "fixed",
        bottom: "20px",
        right: "190px"
    }

};
const useStyles = makeStyles(styles)

export default function Encuesta() {
    const classes = useStyles()
    return (
        <div>
<<<<<<< Updated upstream:responder-encuestas/src/layouts/Encuesta.js
            <Fab className={classes.fab} color="inherit" variant="extended" href="/admin/dashboard">
=======
            <Fab className={classes.fabGys} color="inherit" variant="extended" href="/companyAdmin/dashboard">
>>>>>>> Stashed changes:responder-encuestas/src/views/Dashboard/Encuesta.js
                <SaveIcon className={classes.extendedIcon} />
                       Guardar y Salir
            </Fab>
            <Fab className={classes.fabEnv} disabled color="inherit" variant="extended" href="/companyAdmin/dashboard">
                <SendIcon className={classes.extendedIcon} />
                       Enviar Respuestas
            </Fab>
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <Pades />
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <Pradio />
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <Pselect />
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <Pcheck />
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <Pfile />
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <Pdate />
                    </div>
                </GridItem>
<<<<<<< Updated upstream:responder-encuestas/src/layouts/Encuesta.js
                <GridItem>
                    <Button className={classes.Button} href="/admin/dashboard" color="primary">Enviar Respuestas</Button>
                </GridItem>
=======
>>>>>>> Stashed changes:responder-encuestas/src/views/Dashboard/Encuesta.js
            </GridContainer>
        </div>
    );
}