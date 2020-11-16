import React, { useState, useEffect, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import DateRange from "@material-ui/icons/DateRange";
import Add from "@material-ui/icons/Add";


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import SendIcon from '@material-ui/icons/Send';
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button"
import { getEmpresas} from "controller/empresa.controller";
import {enviarMailDeEncuesta} from "controller/login.controller"
import{nuevoLanzamiento} from "controller/login.controller"
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import estilosBoton from "assets/jss/material-dashboard-react/components/buttonStyle.js";
import {
  Box,
  Container
} from '@material-ui/core';
import Page from 'components/CompaniesComponents/Page.js';
import Results from 'components/CompaniesComponents/Results.js';
import { DividerProvider, useDividerActions, useDividerState } from "./DividerProvider";
import{getEmpresaPorId} from "controller/empresa.controller"
const useStyles = makeStyles(styles,estilosBoton,(theme) => ({
  customers: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default function Divider(props) {
  const classes = useStyles();


 //console.log(encuesta)
const  [mostrarTabla, setMostrarTabla] = React.useState(false);
const [listEmpresas,setListEmpresas] = React.useState([]);

const mostrarEmpresas = () => { 
      if(mostrarTabla){
        return(<div>
                <Page
                    className={classes.customers}
                    title="Empresas"
                  >
               
                    <Container maxWidth={false}>
                      
                      <Box mt={3}>
                        <Results customers={listEmpresas} />
                      </Box>
                    </Container>
                  </Page>
            </div> )
      }
  }

 const {setFlag} = useDividerActions();
const flag = useDividerState().bandera;
const empresas = useDividerState().empresas;


  const obtenerEmpresas = async function(){
    var empresas = await getEmpresas()
    setListEmpresas(empresas)
    //console.log(empresas) 
  }


  const botonAccion = () =>{
    if(mostrarTabla){
      return (
      <Button  round color="danger" onClick= {
        () => {setMostrarTabla(false)
        setFlag(true);
        }
      }
      >
        Cerrar
      </Button>)
    }else{
        return(
          <Button round color="primary" onClick= {
            () => setMostrarTabla(true)

          }
          >
            Mostrar Empresas
          </Button>
        )
    }
  }

  
//{static var listaEmpresasObjetos=[]}

  const lanzarEncuesta = async (encuesta) =>{

    class Objecto{
      constructor(listaEmpresas){
        this.listaEmpresas=listaEmpresas
      }
    }
    var lista=[]
    var contador=0;
    await empresas.map(async empresa =>{
        let objeto = await getEmpresaPorId(empresa);
        console.log("MAIL-> "+objeto.responsable.email)
        lista.push(objeto)
        if(empresas.length-1===contador){
          var objReturn=new Objecto(lista);
          nuevoLanzamiento(objReturn.listaEmpresas,encuesta);
        } 
        contador++;
        console.log(contador)
        //await enviarMailDeEncuesta(objeto.responsable.email)
       //lista[lista.length] = objeto
       
     })


     console.log("LISTA QUE PASA COMO PARAM")
     console.log(lista)
     

    setMostrarTabla(false)
    setFlag(true)
  }




  useEffect(()=>{
      obtenerEmpresas()
  },[setListEmpresas])

  return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={12}>
          <GridContainer>
          <GridItem xs={12} sm={6} md={12}>
            <Card>
                <CardHeader color="warning" stats icon>
                        <CardIcon color ="primary">
                            <Add/>
                        </CardIcon>
                    <p className={classes.cardCategory}>{props.descripcion}</p>
                    <h3 className={classes.cardTitle}>{props.tituloEncuesta}</h3>
                </CardHeader>
                <CardFooter>
                        <div className={classes.stats} >
                            <DateRange />
                            {props.created}
                            </div>
                            <div stats >
                            <Button round disabled={flag} color = "success" onClick={()=>lanzarEncuesta(props._id)}><SendIcon /> Lanzar</Button>
                              {botonAccion()}

                                </div>   
                         
                        </CardFooter>
            
            </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={12}>
                {mostrarEmpresas()}
            </GridItem>
            </GridContainer>
        </GridItem>
        </GridContainer>
  );
}


