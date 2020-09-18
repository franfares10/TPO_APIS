import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import DateRange from "@material-ui/icons/DateRange";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomMenu from "components/CustomGrowMenu/CustomMenu"

import TrafficByDevice from "components/circleChart/TrafficByDevice";
import classNames from "classnames";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Button } from "@material-ui/core";






const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(null);

  const handleClickMenu = event => {
    if (openMenu && openMenu.contains(event.target)) {
      setOpenMenu(null);
    } else {
      setOpenMenu(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

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
