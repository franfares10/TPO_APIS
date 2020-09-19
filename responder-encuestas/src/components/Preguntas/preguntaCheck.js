import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"

const ObsCheckbox = withStyles({
    root: {
        color: [400],
        '&$checked': {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
            <GridItem>
                <h4>Pregunta Checkbox</h4>
            </GridItem>
            <GridItem>
                <FormGroup row>
                    <FormControlLabel
                        control={<ObsCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Opción 1"
                    />
                    <FormControlLabel
                        control={<ObsCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label="Opción 2"
                    />
                    <FormControlLabel
                        control={<ObsCheckbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                        label="Opción 3"
                    />
                    <FormControlLabel
                        control={<ObsCheckbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                        label="Opción 4"
                    />
                </FormGroup>
                </GridItem>
                <GridItem>
                    <p>Párrafo de ayuda</p>
                </GridItem>
        </GridContainer >
    );
}