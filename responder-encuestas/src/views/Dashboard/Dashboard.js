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
import CustomMenu from "components/CustomGrowMenu/CustomMenu"

import TrafficByDevice from "components/circleChart/TrafficByDevice";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";







const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();



  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon>
                <TrafficByDevice/>
              </CardIcon>
                  <p className={classes.cardCategory}>ARCOR</p>
                  <h3 className={classes.cardTitle}>49/50</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
              <div stats icon>
                  <CustomMenu/>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon>
                <TrafficByDevice/>
              </CardIcon>
              <p className={classes.cardCategory}>INTEL</p>
              <h3 className={classes.cardTitle}>45/50</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
              <div stats icon>
              <CustomMenu/>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon>
                <TrafficByDevice/>
              </CardIcon>
              <p className={classes.cardCategory}>MICROSOFT</p>
              <h3 className={classes.cardTitle}>40/50</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
              <div stats icon>
                <CustomMenu/>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
