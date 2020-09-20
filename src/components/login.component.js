import React, { Component } from "react";
import { Link } from "react-router-dom";
import Boton from "./boton";
import Toggle from "./boton";
import GridContainer from "../ComponentesExternos/Card/Grid/GridContainer"
import GridItem from "../ComponentesExternos/Card/Grid/GridItem"
import Card from "../ComponentesExternos/Card/Card/Card"
import CardHeader from "../ComponentesExternos/Card/Card/CardHeader"
import CardBody from "../ComponentesExternos/Card/Card/CardBody"
import ItemCard from "./ItemCard"
import ItemCardImagen from "./ItemCardImagen"
import Button from "../ComponentesExternos/Card/CustomButtons/Button"
import CardFooter from "../ComponentesExternos/Card/Card/CardFooter"
export default class Login extends Component {
        constructor(props) {
          super(props);
          this.state = {isToggleOn: true};
          // This binding is necessary to make `this` work in the callback
          this.handleClick = this.handleClick.bind(this);
        }
      
        handleClick() {
          this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
        }
       
    
   
    render() {
        return (
            <Card>
                <CardHeader>
                <ItemCardImagen></ItemCardImagen>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem>
                          <ItemCard>Username</ItemCard>
                          <ItemCard type="password">Password</ItemCard>
                          <Link to="/iniciado" className="itemCardFooter">
                            <Button className="btn-primary btnPrimario itemCardFooter" customerButton="true" round="true" align="center" >Sign In</Button>
                          </Link>
                
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
    );
}
}
 
/*
<Link to=“ruta”>
      Boton
</Link>*/ 

/*
    <GridItem>
          Elemntos que van aca.
          Imagen
          Campos
          Boton
          Redireccionar,etc.
    </GridItem>

*/ 