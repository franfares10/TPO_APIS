import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const ObsRadio = withStyles({
    root: {
      color: [400],
      '&$checked': {
        color: cyan[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  

export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
            <GridItem>
                <h4>Pregunta Radio</h4>
            </GridItem>
            <GridItem>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="pregunta" name="preg" value={value} onChange={handleChange} row>
                        <FormControlLabel value="opc1" control={<ObsRadio />} label="Opción 1" />
                        <FormControlLabel value="opc2" control={<ObsRadio />} label="Opción 2" />
                        <FormControlLabel value="opc3" control={<ObsRadio />} label="Opción 3" />
                    </RadioGroup>
                </FormControl>
            </GridItem>
            <GridItem>
                    <p>Párrafo de ayuda</p>
                </GridItem>
        </GridContainer>
    );
}

