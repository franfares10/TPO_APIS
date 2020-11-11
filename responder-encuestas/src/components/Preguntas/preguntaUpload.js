import React from "react";
import Fab from '@material-ui/core/Fab';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import UploadIcon from '@material-ui/icons/Publish';
import ReportIcon from '@material-ui/icons/Report';

const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function subirArchivos(props) {
    const subir = () => {
        const input = document.getElementById('file-input');

        if (input) {
            input.click();
        }
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