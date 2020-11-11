import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ReportIcon from '@material-ui/icons/Report';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"

import {updateRespuesta} from "controller/appController";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.value);
    const isInitialMount = useRef(true);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            updateRespuesta(props.sectionIndex, props.questionIndex, value)
         }})

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
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Opciones</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id={"sInd:"+props.sectionIndex+"-qInd:"+props.questionIndex}
                        value={value}
                        onChange={handleChange}
                    >
                    {props.options.map(element => {
                        let opt = element.option
                        let val = element.option
                        return(
                            <MenuItem value={val}>{opt}</MenuItem>
                        )
                    })}
                    </Select>
                </FormControl>
                <GridItem>
                    <p>Párrafo de ayuda</p>
                </GridItem>
            </GridItem>
        </GridContainer>
    );
}