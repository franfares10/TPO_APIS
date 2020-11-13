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
import { getEncuestas } from "controller/encuestas.controller";
import { getEmpresas } from "controller/empresa.controller";
import PropTypes from "prop-types";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import estilosBoton from "assets/jss/material-dashboard-react/components/buttonStyle.js";
import CustomerListView from "views/NewPoll/Companies";
import {
  Box,
  Container
} from '@material-ui/core';
import Page from 'components/CompaniesComponents/Page.js';
import Results from 'components/CompaniesComponents/Results.js';
import Toolbar from 'components/CompaniesComponents/Toolbar.js';
import data from 'variables/data.js';
import { DividerProvider, useDividerState } from "./DividerProvider";

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

const encuesta = props;
 console.log(encuesta)
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

 
  const obtenerEmpresas = async function(){
    var empresas = await getEmpresas()
    setListEmpresas(empresas)
    //console.log(empresas) 
  }


  const botonAccion = () =>{
    if(mostrarTabla){
      return (
      <Button  round color="danger" onClick= {
        () => setMostrarTabla(false)

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
                            <Button round disabled={useDividerState()} color = "success"><SendIcon /> Lanzar</Button>
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


