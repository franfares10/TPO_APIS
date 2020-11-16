import React, { useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ReportIcon from '@material-ui/icons/Report';

import {updateRespuesta} from "controller/appController";
import { respondidas } from "controller/appController";

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

const ObsCheckbox = withStyles({
    root: {
        color: [400],
        '&$checked': {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function CheckboxLabels(props) {

    let val = {}
    let arr= props.value.split(',');
    let arr2 = []
    props.options.map(elem=>{
        let n = elem.option
        arr2.push(n)
    })
    let arr3 = arr2.filter((elem)=> !arr.includes(elem))
    for (let index = 0; index < arr.length; index++) {
            let n = arr[index]
            val[n]=true
        
    }
    for (let index = 0; index < arr3.length; index++) {
        let n = arr3[index]
        val[n]=false
    }
    const [state, setState] = React.useState(val);
    const isInitialMount = useRef(true);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            Object.keys(state).forEach(function(item){
                if(state[item]===true && !arr.includes(item)){
                    arr.push(item)
                }
                else if(state[item]===false && arr.includes(item)){
                    arr.remove(item)
                }
            })
            updateRespuesta(props.sectionIndex, props.questionIndex, arr)
            respondidas()
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
                <FormGroup row>
                    {props.options.map(element=>{
                        let opt = element.option
                        let name = element.option
                        return(
                            <FormControlLabel 
                                control={<ObsCheckbox checked={state[name]} onChange={handleChange} name={name}/>}
                                label={opt}
                            />
                        )
                    })}
                </FormGroup>
                </GridItem>
                <GridItem>
                    <p>{props.description}</p>
                </GridItem>
        </GridContainer>
    );
}