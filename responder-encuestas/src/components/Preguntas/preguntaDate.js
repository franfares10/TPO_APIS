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
    let fi = props.value.includes("fechaIni")
    let ff = props.value.includes("fechaFin")
    console.log("fi "+fi)
    console.log("ff "+ff)
    let fiAux
    let ffAux
    {
    if(fi === false){
        fiAux = "1/1/1900"
    }
    else if(fi === true){
        fiAux = props.value.substr(10,62)
    }}
    {
    if(ff === false){
        ffAux = "1/1/1900"
    }
    else if(fi === false && ff === true){
        ffAux = props.value.substr(10,62)
    }
    else if(fi === true && ff === true){
        ffAux = props.value.substr(75, 62)
    }}
    console.log("fi: "+fi+" ff: "+ff)
    console.log("fiAux: "+fiAux+" ffAux: "+ffAux)

    const [selectedDate1, setSelectedDate1] = React.useState(fiAux);
    const [selectedDate2, setSelectedDate2] = React.useState(ffAux);
    const [cancelarVisible, setCancelarVisible]=React.useState(()=>{if(props.value===""){return "hidden"}else{return "visible"}})
    const isInitialMount = useRef(true);

    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
        setCancelarVisible("visible")
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
        setCancelarVisible("visible")
    };

    useEffect(()=>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            let aux
            if(selectedDate1 === "" && selectedDate2 === "")
            {
                aux = ""
            }
            else if(selectedDate1 != "" && selectedDate2 === ""){
                aux = "fechaIni: "+selectedDate1
            }
            else if(selectedDate1 === "" && selectedDate2 != ""){
                aux = "fechaFin: "+selectedDate2
            }
            else if(selectedDate1 != "" && selectedDate2 != ""){
                aux = "fechaIni: "+selectedDate1+" | fechaFin: "+selectedDate2
            }
            updateRespuesta(props.questionIndex, aux)
            respondidas()
         }})

    const cancelar = () => {
        setSelectedDate1("")
        setSelectedDate2("")
        setCancelarVisible("hidden")
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
                                value={selectedDate1}
                                onChange={handleDateChange1}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                invalidDateMessage={'Ingrese un formato de fecha valido (dd/mm/AA)'}
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
                                value={selectedDate2}
                                onChange={handleDateChange2}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                defaultValue={props.value}
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
