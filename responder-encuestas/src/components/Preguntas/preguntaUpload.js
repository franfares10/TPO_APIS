import React, {useEffect, useRef} from "react";
import Fab from '@material-ui/core/Fab';
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import UploadIcon from '@material-ui/icons/Publish';
import ReportIcon from '@material-ui/icons/Report';

import {uploadFile, updateRespuesta} from "controller/appController";
import { respondidas } from "controller/appController";

const mandatory = (mand) => {
    if(mand === true){
        return(
           <ReportIcon></ReportIcon>
        )
    }
}

export default function SubirArchivos(props) {

    const [file,setFile]=React.useState([]);
    const [nombreFile, setNombreFile]=React.useState(props.value)
    const [cancelarVisible, setCancelarVisible]=React.useState(()=>{if(props.value===""){return "hidden"}else{return "visible"}})
    const isInitialMount = useRef(true);

    function subirArchivo(){
        setFile(document.getElementById(props.title).files[0])
        setNombreFile(document.getElementById(props.title).files[0].name)
        setCancelarVisible("visible")
    }

    useEffect(()=>{
        if (isInitialMount.current) {
          isInitialMount.current = false;
       } else {
           if(nombreFile!=""){
            let files = []
            files.push(file)
            uploadFile(files)
            updateRespuesta(props.sectionIndex, props.questionIndex, nombreFile)
            respondidas()
            }
       }})

    const subir = () => {
        const input = document.getElementById(props.title);

        if (input) {
            input.click();
        }
    }

    const cancelarSubida = () => {
        setFile({})
        setNombreFile("")
        setCancelarVisible("hidden")
        updateRespuesta(props.sectionIndex, props.questionIndex, "")
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
                <input type="file" id={props.title} style={{ display: "none" }} onChange={subirArchivo}/>
                <Fab id="btnSubir" color="inherit" variant="extended" onClick={subir}>
                    <UploadIcon />
                      Subir Archivos
                </Fab>
                <span id="spnFilePath"></span>
            </GridItem>
            <GridItem>
                <p>{nombreFile}</p>
                <a onClick={cancelarSubida} style={{cursor: "pointer", visibility: cancelarVisible}}>Cancelar</a>
            </GridItem>
        </GridContainer>
    );
}