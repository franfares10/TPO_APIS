import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/encuestaStyle.js";
import CardHeader from "components/Card/CardHeader";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card"

import {encuestasUser} from "../../controller/login.controller";

const useStyles = makeStyles(styles);

export default function CompanyDashboard() {
    const classes = useStyles();

    const [listaEncuestas,setListaEncuestas]=React.useState([]);

    console.log("cargacomponente");
    useEffect(()=>{
      console.log("Llegaste al use effect")
      async function componentDidMount() 
      {
        //traer encuestas de User
        let rdo = await encuestasUser();
        setListaEncuestas(rdo); 
      }
      componentDidMount();
    },[]);

    const mostrarEncuestas = ()=>{
        if (listaEncuestas.length==0)
        {
          return (
            <GridItem xs={12} sm={12} md={12}>
            <div>
              <div>
                <h3> No hay encuestas por responder</h3>
              </div>
            </div>
          </GridItem>
          )
        }
      }    

    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.titulo}>Encuestas por responder</h4>
                </CardHeader>
                <GridContainer justify={"center"}>
                    {mostrarEncuestas()}
                    {listaEncuestas.map(encuesta => {
                        let nombre = encuesta.name
                        let fechaCreacion = encuesta.created
                        let idEncuesta = encuesta.idEncuesta
                        return(
                            <div className={classes.encuestaCard}>
                                <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png" alt=""></img>
                                <h4><b>{nombre}</b></h4>
                                <p>Fecha Límite: {fechaCreacion}</p>
                                <Button className={classes.Button} href={"/companyAdmin/encuestas?idEncuesta="+idEncuesta} color="primary">RESPONDER ENCUESTA</Button>
                            </div>
                        )
                    })}
                </GridContainer>
            </Card>
        </div>
    );
}

/*<div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png" alt=""></img>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        <Button className={classes.Button} href="/companyAdmin/encuestas" color="primary">RESPONDER ENCUESTA</Button>
                    </div>*/
