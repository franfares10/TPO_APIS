import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import ReportIcon from '@material-ui/icons/Report';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Fab from '@material-ui/core/Fab';
import UploadIcon from '@material-ui/icons/Publish';

import { getPreguntasById } from "controller/encuestas.controller";

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
    },
    formControl: {
        minWidth: 120,
    }
};

const useStyles = makeStyles(styles)

export default function EncuestaPreview() {
    const classes = useStyles()

    const [encuesta, setEncuesta] = React.useState([]);
    const isInitialMount = useRef(true);

    useEffect(async () => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const idEncuesta = urlParams.get('idEncuesta')
            let rdo = await getPreguntasById(idEncuesta);
            setEncuesta(rdo.questions);
         } 
    },[]);

    const ObsRadio = withStyles({
        root: {
          color: [400],
          '&$checked': {
            color: cyan[600],
          },
        },
        checked: {},
      })((props) => <Radio color="default" {...props} />);
    

    const ObsInput = withStyles({
        root: {
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: cyan[600]
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "grey"
          }
        },
        after: {},
      })((props) => <TextField {...props} />);
    
      const ObsCheckbox = withStyles({
        root: {
            color: [400],
            '&$checked': {
                color: cyan[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const pText = (title, mandatory, description) =>{
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return(
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
                <GridContainer justify={"center"} alignItems={"center"} >
                        <GridItem>
                            <h4>{title}</h4>
                        </GridItem>
                        <GridItem>
                            {isMandatory(mandatory)}
                        </GridItem>
                    </GridContainer>
                <GridItem>
                    <ObsInput label="Respuesta" variant= "outlined"></ObsInput>
                </GridItem>
                <GridItem>
                    <p>{description}</p>
                </GridItem>
            </GridContainer>
          )
    }

    const pLong = (title, mandatory, description) =>{
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return(
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
                <GridContainer justify={"center"} alignItems={"center"} >
                        <GridItem>
                            <h4>{title}</h4>
                        </GridItem>
                        <GridItem>
                            {isMandatory(mandatory)}
                        </GridItem>
                    </GridContainer>
                <GridItem>
                    <ObsInput multiline rows={4} label="Respuesta" variant= "outlined"></ObsInput>
                </GridItem>
                <GridItem>
                    <p>{description}</p>
                </GridItem>
            </GridContainer>
          )
        }

    const pSel = (title, mandatory, description, options) =>{
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return (
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
                <GridContainer justify={"center"} alignItems={"center"} >
                    <GridItem>
                        <h4>{title}</h4>
                    </GridItem>
                    <GridItem>
                        {isMandatory(mandatory)}
                    </GridItem>
                </GridContainer>
                <GridItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Opciones</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id={"qInd:"+Math.random()}
                        >
                        {options.map(element => {
                            let opt = element.option
                            let val = element.option
                            return(
                                <MenuItem value={val}>{opt}</MenuItem>
                            )
                        })}
                        </Select>
                    </FormControl>
                </GridItem>
                    <GridItem>
                        <p>{description}</p>
                    </GridItem>
            </GridContainer>
        );
    }

    const pRad = (title, mandatory, description, options) => {
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return (
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
                <GridContainer justify={"center"} alignItems={"center"} >
                    <GridItem>
                        <h4>{title}</h4>
                    </GridItem>
                    <GridItem>
                        {isMandatory(mandatory)}
                    </GridItem>
                </GridContainer>
                <GridItem>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="pregunta" name="preg" row>
                        {options.map(element => {
                            let opt = element.option
                            let val = element.option
                            return(
                            <FormControlLabel value={val} control={<ObsRadio/>} label={opt}/>
                            )
                        })}
                        </RadioGroup>
                    </FormControl>
                </GridItem>
                <GridItem>
                        <p>{description}</p>
                    </GridItem>
            </GridContainer>
        );
    }

    const pCheck = (title, mandatory, description, options) => {
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return (
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
               <GridContainer justify={"center"} alignItems={"center"} >
                    <GridItem>
                        <h4>{title}</h4>
                    </GridItem>
                    <GridItem>
                        {isMandatory(mandatory)}
                    </GridItem>
                </GridContainer>
                <GridItem>
                    <FormGroup row>
                        {options.map(element=>{
                            let opt = element.option
                            return(
                                <FormControlLabel 
                                    control={<ObsCheckbox/>}
                                    label={opt}
                                />
                            )
                        })}
                    </FormGroup>
                    </GridItem>
                    <GridItem>
                        <p>{description}</p>
                    </GridItem>
            </GridContainer>
        );
    }

    const pDate = (title, mandatory, description) =>{
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return (
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
                <GridContainer justify={"center"} alignItems={"center"} >
                    <GridItem>
                        <h4>{title}</h4>
                    </GridItem>
                    <GridItem>
                        {isMandatory(mandatory)}
                    </GridItem>
                </GridContainer>
                <GridItem>
                    <GridContainer>
                        <GridItem>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    disabled
                                    autoOk={true}
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="fecha1"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    invalidDateMessage={'Ingrese un formato de fecha valido (dd/mm/AA)'}
                                />
                            </MuiPickersUtilsProvider>
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem>
                    <p>{description}</p>
                </GridItem>
            </GridContainer>
        );
    }

    const pFile = (title, mandatory, description) => {
        const isMandatory = (mand) => {
            if(mand === true){
                return(
                   <ReportIcon></ReportIcon>
                )
            }
        }
        return (
            <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
                <GridContainer justify={"center"} alignItems={"center"} >
                    <GridItem>
                        <h4>{title}</h4>
                    </GridItem>
                    <GridItem>
                        {isMandatory(mandatory)}
                    </GridItem>
                </GridContainer>
                <GridItem>
                    <Fab id="btnSubir" color="inherit" variant="extended">
                        <UploadIcon />
                          Subir Archivos
                    </Fab>
                </GridItem>
            </GridContainer>
        );
    }

    return (
        <div>

            <GridContainer direction={"column"} justify={"center"} alignItems={"center"}>
                <GridItem>
                    {encuesta.map(ques => {
                        let title = ques.questionTitle
                        let type = ques.questionType
                        let multi = ques.multiline
                        let mand = ques.mandatory
                        let qdesc = ques.description
                        let qopt = ques.options
                        if (type === "TEXT" && multi == false) {
                            return (
                                <div className={classes.pyrCard}>
                                    {pText(title, mand, qdesc)}
                                </div>
                            )
                        }
                        else if (type === "SELECT") {
                            return (
                                <div className={classes.pyrCard}>
                                    {pSel(title, mand, qdesc, qopt)}
                                </div>
                            )
                        }
                        else if (type === "FILE") {
                            return (
                                <div className={classes.pyrCard}>
                                    {pFile(title, mand, qdesc)}
                                </div>
                            )
                        }
                        else if (type === "RADIO") {
                            return (
                                <div className={classes.pyrCard}>
                                   {pRad(title, mand, qdesc, qopt)}
                                </div>
                            )
                        }
                        else if (type === "CHECK") {
                            return (
                                <div className={classes.pyrCard}>
                                    {pCheck(title, mand, qdesc, qopt)}
                                </div>
                            )
                        }
                        else if (type === "DATE") {
                            return (
                                <div className={classes.pyrCard}>
                                    {pDate(title, mand, qdesc)}
                                </div>
                            )
                        }
                        else if (type === "TEXT" && multi == true) {
                            return (
                                <div className={classes.pyrCard}>
                                    {pLong(title, mand, qdesc)}
                                </div>
                            )
                        }
                    })}
                </GridItem>
            </GridContainer>
        </div>
    );
}

/*.map(ques => {
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
                    })} **/