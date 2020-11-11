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

const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function MaterialUIPickers(props) {

    let fechaInicial = props.value.substr(12,62)
    let fechaFinal = props.value.substr(86,62)
    console.log(fechaInicial)

    const [selectedDate1, setSelectedDate1] = React.useState(fechaInicial);
    const [selectedDate2, setSelectedDate2] = React.useState(fechaFinal);
    const isInitialMount = useRef(true);

    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            updateRespuesta(props.sectionIndex, props.questionIndex, "fecha inic.:"+selectedDate1+" fecha fin.:"+selectedDate2)
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
                                label="Elegir Fecha 1"
                                value={selectedDate1}
                                onChange={handleDateChange1}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                invalidDateMessage={'Formato de fecha invalido'}
                            />
                        </MuiPickersUtilsProvider>
                    </GridItem>
                    <GridItem>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                autoOk={true}
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="fecha2"
                                label="Elegir Fecha 2"
                                value={selectedDate2}
                                onChange={handleDateChange2}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                defaultValue={props.value}
                                invalidDateMessage={'Formato de fecha invalido'}
                            />
                        </MuiPickersUtilsProvider>
                    </GridItem>
                </GridContainer>
            </GridItem>
            <GridItem>
                <p>Párrafo de ayuda</p>
            </GridItem>
        </GridContainer>
    );
}