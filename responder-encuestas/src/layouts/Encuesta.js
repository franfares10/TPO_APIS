import { makeStyles } from "@material-ui/core";
import React from "react";
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Button from "components/CustomButtons/Button";
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';

const styles = {

    respuesta: {
        width: '300px'
    },

    pyrCard: {
        height: '200px',
        width: '600px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        paddingTop: '20px',
        margin: '2em',
        "& h4": {
            fontSize: '150%'
        },
    },

    fab: {
        color: "white",
        backgroundColor: "rgb(30, 154, 159)",
        position: "fixed",
        bottom: "20px",
        right: "20px"
    }

};
const useStyles = makeStyles(styles)

export default function Encuesta() {
    const classes = useStyles()
    return (
        <div>
            <Fab className={classes.fab} color="inherit" variant="extended" href="/admin/dashboard">
                <SaveIcon className={classes.extendedIcon} />
                       Guardar y Salir
            </Fab>
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                            <GridItem>
                                <h4>Pregunta 1</h4>
                            </GridItem>
                            <GridItem>
                                <TextField className={classes.respuesta} label="Respuesta" variant="filled"></TextField>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                            <GridItem>
                                <h4>Pregunta 2</h4>
                            </GridItem>
                            <GridItem>
                                <TextField className={classes.respuesta} label="Respuesta" variant="filled"></TextField>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                            <GridItem>
                                <h4>Pregunta 3</h4>
                            </GridItem>
                            <GridItem>
                                <TextField className={classes.respuesta} label="Respuesta" variant="filled"></TextField>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                            <GridItem>
                                <h4>Pregunta 4</h4>
                            </GridItem>
                            <GridItem>
                                <TextField className={classes.respuesta} label="Respuesta" variant="filled"></TextField>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridItem>
                <GridItem>
                    <div className={classes.pyrCard}>
                        <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                            <GridItem>
                                <h4>Última Pregunta</h4>
                            </GridItem>
                            <GridItem>
                                <TextField className={classes.respuesta} label="Respuesta" variant="filled"></TextField>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridItem>
                <GridItem>
                    <Button className={classes.Button} href="/admin/dashboard" color="primary">Enviar Respuestas</Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}