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
import Button from 'components/CustomButtons/Button';
import {eliminarEmpresasDeEncuesta} from "../../controller/login.controller"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import history from "utils/History/history"
import {eliminarRespuesta} from 'controller/appController';
const useStyles = makeStyles(styles);

export default function CustomMenu(props) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(null);
  const [open, setOpen] = React.useState(false);
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

  
  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const eliminarEmpresa =async function (idEncuestaLanzada){
    var flag=2; //Defino el flag de borrado de la empresa.
    //Me faltan la lista de las emmpresas y el ide de la encuesta.
    //Ivan acordate que dentro del Lanzamiento tenemos idEmpresa, y nombre.
    //console.log("Los props son:",props.empresa)
    //console.log(props.encuesta)
    console.log("ESTOS SON LOS PROPS")
    console.log(props)
    //Preguntarle a fran como hacer para linkear los props, o sea, que cuando clickee mostrarEmpresas desde el Dashboarde encuestas lanzadas,
    //Si podemos setear una variable en el localStorage que por cada onClick se actualice.

    await eliminarEmpresasDeEncuesta(props.empresa._id,props.encuesta._id);
    await eliminarRespuesta(props.encuesta.idEncuesta,props.empresa._id,props.encuesta._id)
   
    //await eliminarEmpresasDeEncuesta(flag,listaEmpresas,idEncuestaLanzada)
    //console.log(idEmpresa)
    history.push("admin/dashboard")
  }


  return(
      <div>
                    <Button color = "primary"
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
                                            className={classes.dropdownItem}
                                            onClick={() =>{
                                          
                                              handleCloseMenu()
                                              setOpen(true)
                                              }}
                                        >  
                                            Retirar empresa de la Encuesta
                                            
                                        </MenuItem>  
                                        
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Poppers>
                        <div>
                        <Dialog
            
                              open={open}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-slide-title"
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle id="alert-dialog-slide-title">{'¿Estas seguro de eliminar la empresa?'}</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                Si deseas eliminar la empresa de la encuesta de forma permanente presione "aceptar", de lo contrario presione "cancelar"
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={() => {
                                      eliminarEmpresa()
                                      
                                      handleClose();
                                }} color="success">
                                  Aceptar
                                </Button>
                                <Button onClick={() =>{
                            
                                  handleClose()}} color="danger">
                                  Cancelar
                                </Button>
                              </DialogActions>
                            </Dialog>
                            </div>
                        </div>
        )

}
