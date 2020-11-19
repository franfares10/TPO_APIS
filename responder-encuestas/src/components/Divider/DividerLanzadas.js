import React, { useState, useEffect } from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import DateRange from "@material-ui/icons/DateRange";
import PropTypes from "prop-types";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Assessment from "@material-ui/icons/BarChart";
import Button from "components/CustomButtons/Button.js"
import Dashboard from "views/Dashboard/Dashboard.js"
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { getLanzadasPorUsuario } from "controller/login.controller";
import { getEncuestaPorId } from "controller/encuestas.controller";
import CustomMenu from "components/CustomGrowMenu/CustomMenu"
import TrafficByDevice from "components/circleChart/TrafficByDevice";
import { getEmpresaPorId } from "controller/empresa.controller";
import {respuestaPorId} from "controller/appController"



const useStyles = makeStyles(styles);

export default function DividerLanzadas(props){
    const classes = useStyles();
    const  [mostrarResultados, setMostrarResultados] = React.useState(false);
  


   //HACER UN COMPONENTE NUEVO CONTEXT REDUCE AVERIGUAR PARA MANDAR CONTEXTOS ENTRE COMPONENTES 

    const botonAccion = () =>{
        if(mostrarResultados){
          return (
          <Button  color="danger" onClick= {
            () => setMostrarResultados(false)
    
          }
          >
            Cerrar
          </Button>)
        }else{
            return(
              <Button  color="primary" onClick= {
                () => setMostrarResultados(true)
    
              }
              >
                Mostrar Empresas
              </Button>
            )
        }
      }

 

      const pasarProps = (empresa,encuesta) =>{
          var objeto = {
          empresa: empresa,
            encuesta: encuesta
           
          }
          return objeto;
      }

      const funcionPropiedad = (empresa,lanzamiento) =>{
            var data = {empresa:empresa,
            lanzamiento:lanzamiento}

            return data;
      }


      const mostrarEmpresas = (listaEmpresas) => { 
        if(mostrarResultados){
           
          return(
                   <div>
                        <GridContainer>
                            {listaEmpresas.map(  empresa =>(
                                
                            <GridItem xs={12} sm={6} md={4}>
                            
                            <Card>
                                <CardHeader color="warning" stats icon>
                                <CardIcon>
                                    <TrafficByDevice {...funcionPropiedad(empresa,props)}/>
                                </CardIcon>
                                    
                                    <h3 className={classes.cardTitle}>{empresa.nombreEmpresa}</h3>
                                </CardHeader>
                                <CardFooter stats>
                                <div className={classes.stats}>
                                    <DateRange />
                                    Ultimas 24 horas.
                                </div>
                                <div stats icon>
                                    <CustomMenu {...pasarProps(empresa,props)}/>
                                </div>
                                </CardFooter>
                            </Card>
                            </GridItem>
                            ))}
                        </GridContainer>
                        </div>
               )
        }
    }
    return(
        
        <div>
        <GridContainer>
    
            <GridItem xs={12} sm={6} md={12}>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={12}>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                        <CardIcon color ="success">
                                            <Assessment/>
                                        </CardIcon>
                                    <p className={classes.cardCategory}>{props.encuesta.descripcion}</p>
                                    <h3 className={classes.cardTitle}>{props.encuesta.tituloEncuesta}</h3>
                                </CardHeader>
                                <CardFooter>
                                <div className={classes.stats} >
                                    <DateRange />
                                    {props.fechaVencimiento}
                                    </div>
                                    <div stats >
                                    {botonAccion()}
                                        </div>   
                                
                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={12}>
                            {console.log("PROPS:",props.listaEmpresasLanzadas)}
                            {mostrarEmpresas(props.listaEmpresasLanzadas)}
                        </GridItem>
                    </GridContainer>
            </GridItem>   
    </GridContainer>
    </div>

    )
}
