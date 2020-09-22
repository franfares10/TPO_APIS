import React from "react";
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






const useStyles = makeStyles(styles);

export default function PollSelection(){
    const classes = useStyles();
    const  [mostrarResultados, setMostrarResultados] = React.useState(false);
    const mostrarEstados = () => { 
        if(mostrarResultados){
          return(<div>
                  <Dashboard/>
              </div> )
        }
    }

    return(

        <GridContainer>
        <GridItem xs={12} sm={6} md={12}>
            <Card>
                <CardHeader color="warning" stats icon>
                        <CardIcon color ="success">
                            <Assessment/>
                        </CardIcon>
                    <p className={classes.cardCategory}> Encuesta_1</p>
                    <h3 className={classes.cardTitle}></h3>
                </CardHeader>
                <CardFooter>
                <div className={classes.stats} >
                    <DateRange />
                    Last 24 Hours
                    </div>
                    <div stats >
                    <Button  color="primary" onClick= {
                            () => setMostrarResultados(true)
                        }
                        >
                          Mostrar Estados
                        </Button>
                        </div>   
                
               
                
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={12}>
        
        {mostrarEstados()}
        <Button  color = "danger" onClick ={
            () => setMostrarResultados(false)
          }>
            Close
          </Button>
      </GridItem>
    </GridContainer>
    )
}
