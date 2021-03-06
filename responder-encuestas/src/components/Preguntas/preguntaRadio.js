import React, { useEffect, useRef } from "react";
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ReportIcon from '@material-ui/icons/Report';

import {updateRespuesta} from "controller/appController";
import { respondidas } from "controller/appController";

const ObsRadio = withStyles({
    root: {
      color: [400],
      '&$checked': {
        color: cyan[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
} 

export default function RadioButtonsGroup(props) {
    const [value, setValue] = React.useState(props.value);
    const [cancelarVisible, setCancelarVisible]=React.useState(()=>{if(props.value===""){return "hidden"}else{return "visible"}})
    const isInitialMount = useRef(true);

    const handleChange = (event) => {
        setValue(event.target.value);
        setCancelarVisible("visible")
    }

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            updateRespuesta(props.questionIndex, value).then(r=>{respondidas()})
         }})

    const cancelar = () => {
        setValue("")
        setCancelarVisible("hidden")
        updateRespuesta(props.questionIndex, "")
    }

    return (
        <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
            <GridContainer justify={"center"} alignItems={"center"} >
                <GridItem>
                    <h4>{props.title}</h4>
                </GridItem>
                <GridItem>
                    {mandatory(props.mandatory)}
                </GridItem>
            </GridContainer>
            <GridItem>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="pregunta" name="preg" value={value} onChange={handleChange} row>
                    {props.options.map(element => {
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
                    <p>{props.description}</p>
                </GridItem>
            <GridItem>
                <a onClick={cancelar} style={{cursor: "pointer", visibility: cancelarVisible}}>Cancelar</a>
            </GridItem>
        </GridContainer>
    );
}
