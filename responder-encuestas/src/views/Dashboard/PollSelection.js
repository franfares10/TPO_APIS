import React, { useState, useEffect } from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import DateRange from "@material-ui/icons/DateRange";

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
import DividerLanzadas from "components/Divider/DividerLanzadas"

import { eliminarLanzamiento } from "controller/login.controller";

const useStyles = makeStyles(styles);

export default function PollSelection(){
    const classes = useStyles();

    const [listEncuestas, setListEncuestas] = React.useState([]);



    useEffect(() => { 
       getLanzadasPorUsuario(setListEncuestas)

      },[setListEncuestas]);



     

    return(
        
        <div>
       
        {listEncuestas.map(encuesta =>(
          
          <DividerLanzadas {...encuesta}/>
      ))}
  
    </div>

    )
}
