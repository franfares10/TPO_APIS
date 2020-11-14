import React, { useEffect, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import ReportIcon from '@material-ui/icons/Report';

import {updateRespuesta} from "controller/appController";
import { respondidas } from "controller/appController";

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

  const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function Pades (props){
  const [value,setValue]=React.useState('')
  const isInitialMount = useRef(true);

  const handleChange = (event) => {
    setValue(event.target.value);
};

useEffect(()=>{
  if (isInitialMount.current) {
    isInitialMount.current = false;
 } else {
    updateRespuesta(props.sectionIndex, props.questionIndex, value)
    respondidas()
 }})

  return(
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
            <ObsInput label="Respuesta" variant= "outlined" defaultValue={props.value} onChange={handleChange}></ObsInput>
        </GridItem>
        <GridItem>
            <p>{props.description}</p>
        </GridItem>
    </GridContainer>
  )}