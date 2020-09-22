import React from "react";
import Fab from '@material-ui/core/Fab';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import UploadIcon from '@material-ui/icons/Publish';

export default function subirArchivos() {
    const subir = () => {
        const input = document.getElementById('file-input');

        if (input) {
            input.click();
        }
    }
    return (
        <GridContainer direction={"column"} justify={"center"} alignItems={"center"} >
            <GridItem>
                <h4>Pregunta File</h4>
            </GridItem>
            <GridItem>
                <input type="file" id="file-input" style={{ display: "none" }} />
                <Fab id="btnSubir" color="inherit" variant="extended" onClick={subir}>
                    <UploadIcon />
                      Subir Archivos
                </Fab>
                <span id="spnFilePath"></span>
            </GridItem>
            <GridItem>
                <p>Párrafo de ayuda</p>
            </GridItem>
        </GridContainer>
    );
}