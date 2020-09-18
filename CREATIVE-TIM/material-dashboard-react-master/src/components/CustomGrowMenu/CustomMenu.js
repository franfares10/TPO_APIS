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
import Poppers from "@material-ui/core/Popper";
// core components

import classNames from "classnames";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { Button } from "@material-ui/core";




const useStyles = makeStyles(styles);

export default function CustomMenu() {
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

  return(
      <div>
                    <Button color = "danger"
                    onClick={handleClickMenu}>
                <MenuIcon/>
                </Button>
                <Poppers
                        
                        open={Boolean(openMenu)}
                        anchorEl={openMenu}
                        transition
                        disablePortal
                        className={
                            classNames({ [classes.popperClose]: !openMenu }) +
                            " " +
                            classes.popperNav
                        }
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{
                                
                                transformOrigin:
                                placement === "bottom" ? "center top" : "center bottom"
                            
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleCloseMenu}>
                                <MenuList role="menu" >
                                        <MenuItem           
                                            onClick={handleCloseMenu}
                                            className={classes.dropdownItem}
                                        >
                                            Retirar empresa de la Encuesta
                                        </MenuItem>  
                                        
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Poppers>
                        </div>
        )

}
