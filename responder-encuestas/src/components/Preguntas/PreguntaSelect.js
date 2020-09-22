import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
            <GridItem>
                <h4>Pregunta Select</h4>
            </GridItem>
            <GridItem>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Opciones</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Opción 1</MenuItem>
                        <MenuItem value={2}>Opción 2</MenuItem>
                        <MenuItem value={3}>Opción 3</MenuItem>
                    </Select>
                </FormControl>
                <GridItem>
                    <p>Párrafo de ayuda</p>
                </GridItem>
            </GridItem>
        </GridContainer>
    );
}