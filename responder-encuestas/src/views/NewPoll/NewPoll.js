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
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import estilosBoton from "assets/jss/material-dashboard-react/components/buttonStyle.js";
import CustomerListView from "./Companies";
import {
  Box,
  Container
} from '@material-ui/core';
import Page from '../../components/CompaniesComponents/Page.js';
import Results from '../../components/CompaniesComponents/Results.js';
import Toolbar from '../../components/CompaniesComponents/Toolbar.js';
import data from 'variables/data.js';
import Divider from "components/Divider/Divider"
import { DividerProvider } from "components/Divider/DividerProvider";




const useStyles = makeStyles(styles,estilosBoton,(theme) => ({
  customers: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default function Dashboard() {
  const classes = useStyles();


  const [listEncuestas, setListEncuestas] = React.useState([]);

 // const [botonLanzar,setBotonLanzar] = React.useState();



  useEffect(() => { 
    getEncuestas(setListEncuestas);
  },[setListEncuestas]);


  return (
    <div>
      
      
      {listEncuestas.map(encuesta =>(
        <DividerProvider>
        <Divider {...encuesta}/>   
        </DividerProvider>
        ))}
        
   
      
    </div>
  );
}
