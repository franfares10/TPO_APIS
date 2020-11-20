import React, { useEffect, useRef } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ReportIcon from '@material-ui/icons/Report';

import {updateRespuesta} from "controller/appController";
import { respondidas } from "controller/appController";

const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function MaterialUIPickers(props) {

    const [selectedDate, setSelectedDate] = React.useState(props.value);
    const [cancelarVisible, setCancelarVisible]=React.useState(()=>{if(props.value===""){return "hidden"}else{return "visible"}})
    const isInitialMount = useRef(true);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setCancelarVisible("visible")
    };

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
             if(selectedDate === null){
                updateRespuesta(props.questionIndex, "").then(r=>{respondidas()})
             }else{
                updateRespuesta(props.questionIndex, selectedDate).then(r=>{respondidas()})
             }
         }})

    const cancelar = () => {
        handleDateChange(null)
        setCancelarVisible("hidden")
    };

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
                <GridContainer>
                    <GridItem>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                autoOk={true}
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="fecha1"
                                value={selectedDate}
                                onChange={handleDateChange}
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
                <p>{props.description}</p>
            </GridItem>
            <GridItem>
                <a onClick={cancelar} style={{cursor: "pointer", visibility: cancelarVisible}}>Cancelar</a>
            </GridItem>
        </GridContainer>
    );
}
