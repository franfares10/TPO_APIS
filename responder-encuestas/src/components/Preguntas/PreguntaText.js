import React from "react";
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

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

export default pades => (
    <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
        <GridItem>
            <h4>Pregunta Text Input</h4>
        </GridItem>
        <GridItem>
            <ObsInput label="Respuesta" variant= "outlined"></ObsInput>
        </GridItem>
        <GridItem>
            <p>Párrafo de ayuda</p>
        </GridItem>
    </GridContainer>
);