import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Button from "components/CustomButtons/Button";
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import Pades from 'components/Preguntas/PreguntaText'
import Pradio from 'components/Preguntas/preguntaRadio'
import Pselect from 'components/Preguntas/preguntaSelect'
import Pcheck from 'components/Preguntas/PreguntaCheck'
import Pfile from 'components/Preguntas/PreguntaUpload'
import Pdate from 'components/Preguntas/preguntaDate'
import Plong from 'components/Preguntas/PreguntaLong'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { encuestaPorId, updateEncuesta } from "controller/appController";
import { respondidas } from "controller/appController";

const styles = {
    pyrCard: {
        height: 'auto',
        width: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        paddingLeft: '60px',
        paddingRight: '60px',
        paddingBottom: '30px',
        margin: '3em',
        "& h4": {
            fontSize: '150%'
        },
    },
    fabEnv: {
        color: "white",
        backgroundColor: "rgb(30, 154, 159)",
        position: "fixed",
        bottom: "20px",
        right: "20px"
    }

};
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(styles)

export default function Encuesta() {
    const classes = useStyles()

    const [encuesta, setEncuesta] = React.useState([]);
    const [openError, setOpenError] = React.useState(false);
    const [openOk, setOpenOk] = React.useState(false);
    const [openThanks, setOpenThanks] = React.useState(false);

    const handleClickError = () => {
        setOpenError(true);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };

    const handleClickOk = () => {
        setOpenOk(true);
    };

    const handleCloseOk = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenOk(false);
    };

    const handleClickThanks = () => {
        setOpenThanks(true);
    };

    const handleCloseThanks = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenThanks(false);
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idEncuesta = urlParams.get('idEncuesta')
    localStorage.setItem("idEncuesta", idEncuesta)

    useEffect(() => {
        async function componentDidMount() {
            //traer encuestas de User
            console.log("estoy cargando la encuesta")
            let rdo = await encuestaPorId();
            setEncuesta(rdo);
        }
        componentDidMount();
        respondidas();
    }, []);

    async function revisarResp() {
        let ok = true
        let resp = await encuestaPorId()
        console.log(resp)
        resp.map(enc => {
            enc.questions.questions.map(ques => {
                let mand = ques.mandatory
                let val = ques.value
                if (mand === true && val === "") {
                    ok = false
                }
            })
        })
        if (ok === true) {
            handleClickOk()
        }
        else if (ok === false) {
            handleClickError()
        }
    }

    async function responder() {
            await updateEncuesta();
            handleCloseOk()
            handleClickThanks()
            window.location.href = '/companyAdmin/dashboard'
    }

    const verifyId = () => {
        let uId = localStorage.getItem('id')
        let eId = encuesta.map(enc => { return enc.userId })[0]
        console.log(uId, eId)
        if (uId !== eId) {
            return (<h4>No tiene permisos para ver esta encuesta</h4>)
        }
        else {
            return (
                <div>
                    <Fab className={classes.fabEnv} color="inherit" variant="extended" onClick={revisarResp}>
                        <SendIcon className={classes.extendedIcon} />
                       Enviar Respuestas
            </Fab>
                    <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                        <GridItem>
                            <h4>{encuesta.map(enc => { return enc.name })}</h4>
                        </GridItem>
                        <GridItem>
                            <p>{encuesta.map(enc => { return enc.description })}</p>
                        </GridItem>
                        <GridItem>
                            {encuesta.map(enc => {
                                return (
                                    enc.questions.questions.map(ques => {
                                        let qInd = ques.questionIndex
                                        let title = ques.questionTitle
                                        let type = ques.questionType
                                        let multi = ques.multiline
                                        let mand = ques.mandatory
                                        let val = ques.value
                                        let qdesc = ques.description
                                        console.log(qInd, title, type, multi, mand, val, qdesc)
                                        if (type === "TEXT" && multi == false) {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Pades title={title} mandatory={mand} value={val} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                        else if (type === "SELECT") {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Pselect title={title} mandatory={mand} value={val} options={ques.options} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                        else if (type === "FILE") {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Pfile title={title} mandatory={mand} value={val} options={ques.options} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                        else if (type === "RADIO") {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Pradio title={title} mandatory={mand} value={val} options={ques.options} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                        else if (type === "CHECK") {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Pcheck title={title} mandatory={mand} value={val} options={ques.options} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                        else if (type === "DATE") {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Pdate title={title} mandatory={mand} value={val} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                        else if (type === "TEXT" && multi == true) {
                                            return (
                                                <div className={classes.pyrCard}>
                                                    <Plong title={title} mandatory={mand} value={val} questionIndex={qInd} description={qdesc} />
                                                </div>
                                            )
                                        }
                                    }))
                            })}
                        </GridItem>
                        <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                            <Alert onClose={handleCloseError} severity="error">
                                Hay preguntas obligatorias sin responder. Por favor revise sus respuestas.
                            </Alert>
                        </Snackbar>
                        <Snackbar open={openThanks} autoHideDuration={6000} onClose={handleCloseThanks}>
                            <Alert onClose={handleCloseThanks} severity="success">
                                ¡Muchas gracias por su tiempo!
                            </Alert>
                        </Snackbar>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
                            open={openOk}
                            onClose={handleCloseOk}
                            message={"¿Está seguro que desea enviar estas respuestas?"}
                            action={
                                <React.Fragment>
                                    <Button color="success" size="small" onClick={responder}>
                                        ACEPTAR
                                    </Button>
                                    <Button color="danger" size="small" onClick={handleCloseOk}>
                                        CANCELAR
                                    </Button>
                                </React.Fragment>
                            }
                        />
                    </GridContainer>
                </div>
            )
        }
    }
    return (
        <div>
            {verifyId()}
        </div>
    );
}

/*{encuesta.questions.questions.map(ques=>{

            })}*/
