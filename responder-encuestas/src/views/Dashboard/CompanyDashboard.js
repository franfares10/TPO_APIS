import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/encuestaStyle.js";
import CardHeader from "components/Card/CardHeader";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card"

import {encuestasUserCompany} from "../../controller/login.controller";

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
        let rdo = await encuestasUserCompany();        
        setListaEncuestas(rdo); 
      }
    
      componentDidMount();
      console.log(listaEncuestas)
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
                        let idEncuesta = encuesta._id
                        let fecha = new Date (encuesta.modified).toLocaleDateString()
                        return(
                            <div className={classes.encuestaCard}>
                                <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png" alt=""></img>
                                <h4><b>{nombre}</b></h4>
                                <p>Fecha Límite: {fecha}</p>
                                <Button className={classes.Button} href={"/companyAdmin/encuestas?idEncuesta="+idEncuesta} color="primary">RESPONDER ENCUESTA</Button>
                            </div>
                        )
                    })}
                </GridContainer>
            </Card>
        </div>
    );
}
