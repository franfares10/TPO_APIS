import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Poppers from "@material-ui/core/Popper";
// core components
import { DividerProvider, useDividerActions, useDividerState } from "components/Divider/DividerProvider";
import classNames from "classnames";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { Button } from "@material-ui/core";
import {eliminarEmpresasDeEncuesta} from "../../controller/login.controller"



const useStyles = makeStyles(styles);

export default function CustomMenu(props) {
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

  
  

  const eliminarEmpresa =async function (idEncuestaLanzada){
    var flag=2; //Defino el flag de borrado de la empresa.
    //Me faltan la lista de las emmpresas y el ide de la encuesta.
    //Ivan acordate que dentro del Lanzamiento tenemos idEmpresa, y nombre.
    console.log("Los props son:",props)
    //Preguntarle a fran como hacer para linkear los props, o sea, que cuando clickee mostrarEmpresas desde el Dashboarde encuestas lanzadas,
    //Si podemos setear una variable en el localStorage que por cada onClick se actualice.

    handleCloseMenu();
    var idEncuestaLanzada2="5fb1770a0492395824f7ed8a";
    var listaBorrar=[]
    listaBorrar.push(props)
    var options={
      _id:idEncuestaLanzada2,
      listaEmpresasNueva:null,
      listaEmpresasBorrar:listaBorrar
    }
    await listaBorrar.map(async element=>{
      console.log("Entrando a borrar las empresas:")
      await eliminarEmpresasDeEncuesta(options);
    })
    //await eliminarEmpresasDeEncuesta(flag,listaEmpresas,idEncuestaLanzada)
    //console.log(idEmpresa)

  }


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
                                            onClick={eliminarEmpresa()}
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
