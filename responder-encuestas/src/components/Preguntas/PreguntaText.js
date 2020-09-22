import React from "react";
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"

export default pades => (
    <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
        <GridItem>
            <h4>Pregunta Text Input</h4>
        </GridItem>
        <GridItem>
            <TextField label="Respuesta"></TextField>
        </GridItem>
        <GridItem>
            <p>Párrafo de ayuda</p>
        </GridItem>
    </GridContainer>
);