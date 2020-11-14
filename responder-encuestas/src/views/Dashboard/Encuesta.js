import { makeStyles } from "@material-ui/core";
import React, {useEffect} from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Button from "components/CustomButtons/Button";
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import Pades from 'components/Preguntas/PreguntaText'
import Pradio from 'components/Preguntas/PreguntaRadio'
import Pselect from 'components/Preguntas/PreguntaSelect'
import Pcheck from 'components/Preguntas/PreguntaCheck'
import Pfile from 'components/Preguntas/PreguntaUpload'
import Pdate from 'components/Preguntas/PreguntaDate'
import Plong from 'components/Preguntas/PreguntaLong'

import {encuestaPorId, updateEncuesta} from "controller/appController";

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
const useStyles = makeStyles(styles)

export default function Encuesta() {
    const classes = useStyles()

    const [encuesta,setEncuesta]=React.useState([]);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idEncuesta = urlParams.get('idEncuesta')
    localStorage.setItem("idEncuesta", idEncuesta)

    useEffect(()=>{
      async function componentDidMount() 
      {
        //traer encuestas de User
        let rdo = await encuestaPorId();
        setEncuesta(rdo); 
      }
      componentDidMount();
    },[]);

    async function revisarResp() {
        let ok = true
        let resp = await encuestaPorId()
        resp.map((enc)=>enc.sections.map((sec)=>sec.questions.map(ques=>{
            let mand= ques.mandatory
            let val= ques.value
            if(mand===true && val === ""){
                ok = false
            }
        })))
        if(ok === true){
            mandarResp()
        }
        else if(ok === false){
            alert("Hay preguntas obligatorias sin responder. Por favor revise las respuestas")
        }
    }

    async function mandarResp(){
        if(window.confirm("¿Esta seguro que desa enviar la encuesta en su estado actual? De no ser así presioné el boton cancelar para revisar sus respuestas")){
            await updateEncuesta();
            alert ("Encuesta respondida con éxito, muchas gracias por su tiempo")
            window.location.href = '/companyAdmin/dashboard'
        }
    }


    return (
        <div>
            <Fab className={classes.fabEnv} color="inherit" variant="extended" onClick={revisarResp}>
                <SendIcon className={classes.extendedIcon} />
                       Enviar Respuestas
            </Fab>
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
            {encuesta.map((enc)=>enc.sections.map((sec)=>{
                let tit = sec.sectionTitle
                let desc = sec.sectionDescription
                return(
                    <GridItem>
                        <GridContainer justify={"center"}>
                            <GridItem xs={12}>
                                <h4>{tit}</h4>
                            </GridItem>
                            <GridItem xs={12}>
                                <p>{desc}</p>
                            </GridItem>
                            <GridItem>
                            {sec.questions.map((ques)=>{
                    let sInd = sec.sectionIndex
                    let qInd = ques.questionIndex
                    let title = ques.questionTitle
                    let type = ques.questionType
                    let multi = ques.multiline
                    let mand = ques.mandatory
                    let val = ques.value
                    let qdesc = ques.description
                    if(type === "TEXT" && multi == false){
                        return(
                            <div className={classes.pyrCard}>
                                <Pades title={title} mandatory={mand} value={val} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                    else if(type === "SELECT"){
                        return(
                            <div className={classes.pyrCard}>
                                <Pselect title={title} mandatory={mand} value={val} options={ques.options} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                    else if(type === "FILE"){
                        return(
                            <div className={classes.pyrCard}>
                                <Pfile title={title} mandatory={mand} value={val} options={ques.options} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                    else if(type === "RADIO"){
                        return(
                            <div className={classes.pyrCard}>
                                <Pradio title={title} mandatory={mand} value={val} options={ques.options} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                    else if(type === "CHECK"){
                        return(
                            <div className={classes.pyrCard}>
                                <Pcheck title={title} mandatory={mand} value={val} options={ques.options} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                    else if(type === "DATE"){
                        return(
                            <div className={classes.pyrCard}>
                                <Pdate title={title} mandatory={mand} value={val} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                    else if(type === "TEXT" && multi == true){
                        return(
                            <div className={classes.pyrCard}>
                                <Plong title={title} mandatory={mand} value={val} sectionIndex={sInd} questionIndex={qInd} description={qdesc}/>
                            </div>
                        )
                    }
                })}
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                )
            }))}
            </GridContainer>
        </div>
    );
}

/*<GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
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
                        <Pdate/>
                    </div>
                </GridItem>
            </GridContainer>*/ 