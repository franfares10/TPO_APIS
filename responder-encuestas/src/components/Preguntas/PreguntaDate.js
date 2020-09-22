import React from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
    const [selectedDate1, setSelectedDate1] = React.useState();
    const [selectedDate2, setSelectedDate2] = React.useState();
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };
    return (
        <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
            <GridItem>
                <h4>Pregunta Date</h4>
            </GridItem>
            <GridItem>
                <GridContainer>
                    <GridItem>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
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
                            />
                        </MuiPickersUtilsProvider>
                    </GridItem>
                    <GridItem>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
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