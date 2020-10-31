import React from "react";
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
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button"

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CustomerListView from "./Companies";







const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const  [mostrarTabla, setMostrarTabla] = React.useState(false);
  const mostrarEmpresas = () => { 
      if(mostrarTabla){
        return(<div>
                <CustomerListView/>
            </div> )
      }
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/newpoll/companies">
            <Card>
                <CardHeader color="warning" stats icon>
                        <CardIcon color ="primary">
                            <Add/>
                        </CardIcon>
                    <p className={classes.cardCategory}> Encuesta_1</p>
                    <h3 className={classes.cardTitle}></h3>
                </CardHeader>
                <CardFooter stats>
                <div className={classes.stats} >
                    <DateRange />
                    Duración: 24hs
                        <Button customerButton color="primary" onClick= {
                          () => setMostrarTabla(true)

                        }
                        >
                          Mostrar Empresas
                        </Button>
                  
                </div>
                
                </CardFooter>
            </Card>
        </Link>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/newpoll/companies">
          <Card>
            <CardHeader color="success" stats icon>
            <CardIcon color ="primary">
                <Add/>
              </CardIcon>
              <p className={classes.cardCategory}>Encuesta_2</p>
              <h3 className={classes.cardTitle}></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Duración: 24hs
                <Button customerButton color="primary" onClick= {
                      () => setMostrarTabla(true)

                    }>
                      Mostrar Empresas
                    </Button>
              </div>
            </CardFooter>
          </Card>
        </Link>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
        <Link to={"/admin/newpoll/companies"}>
          <Card>
            <CardHeader color="danger" stats icon>
                <CardIcon color ="primary">
                 <Add/>
                </CardIcon>
              <p className={classes.cardCategory}>Encuesta_3</p>
              <h3 className={classes.cardTitle}></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Duración: 24hs
                <Button customerButton color="primary" onClick= {
                      () => setMostrarTabla(true)

                    }>
                      Mostrar Empresas
                    </Button>
                </div>
            </CardFooter>
          </Card>
        </Link>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/newpoll/companies">
          <Card>
            <CardHeader color="primary" stats icon>
                <CardIcon color ="primary">
                    <Add/>
                </CardIcon>
              <p className={classes.cardCategory}>Encuesta_4</p>
              <h3 className={classes.cardTitle}></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Duración: 24hs
                <Button customerButton color="primary" onClick= {
                      () => setMostrarTabla(true)

                    }>
                      Mostrar Empresas
                    </Button>
              </div>
            </CardFooter>
          </Card>

        </Link>

        </GridItem>
        <GridItem xs={12} sm={6} md={12}>
        
          {mostrarEmpresas()}
        
        </GridItem>
      </GridContainer>
    </div>
  );
}
