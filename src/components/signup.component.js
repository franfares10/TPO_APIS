import React, { Component } from "react";
import {Link} from "react-router-dom";
import CardBody from "../ComponentesExternos/Card/Card/CardBody";
import GridContainer from "../ComponentesExternos/Card/Grid/GridContainer";
import GridItem from "../ComponentesExternos/Card/Grid/GridItem";
import Login from "./login.component";
import Card from "../ComponentesExternos/Card/Card/Card";
import CardHeader from "../ComponentesExternos/Card/Card/CardHeader";
import CardFooter from "../ComponentesExternos/Card/Card/CardFooter";
import ItemCardImagen from "./ItemCardImagen";
import ItemCard from "./ItemCard";
import Button from "..//ComponentesExternos/Card/CustomButtons/Button"

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <Card>
                    <CardHeader>
                    <ItemCardImagen></ItemCardImagen>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem>
                                
                                <ItemCard className="itemCard">First Name</ItemCard>
                                <ItemCard>Last Name</ItemCard>
                                <ItemCard>Email</ItemCard>
                                <ItemCard type="password">Password</ItemCard>
                                <Link to="/sign-in" className="itemCardFooter">
                                    <Button className="btn btn-primary btn-block" customerButton="true" round="true">Solicitar  cuenta</Button>
                                </Link>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </form>
        );
    }
}