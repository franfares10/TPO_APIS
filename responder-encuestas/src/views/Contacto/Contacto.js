import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import logoTwitter from "assets/img/iconos/Twitter-Logo.png";
import logoFacebook from "assets/img/iconos/facebook-logo.png";
import logoLinkeding from "assets/img/iconos/linkedin-logo.png";
import logoInstagram from "assets/img/iconos/instagram-logo.png";

const styles = {
    h4: {
        paddingLeft: "20px"
    },

    p: {
        paddingLeft: "20px"
    },

    imgTwitter: {
        paddingBottom: "50px",
        paddingLeft: "50px",
        border: "none",
        borderRadius: "2px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        opacity: "1",
        "&:hover": {
            opacity: "0.6"
        }
    },

    imgFacebook: {
        border: "none",
        borderRadius: "2px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        opacity: "1",
        "&:hover": {
            opacity: "0.6"
        }
    },

    imgLinkedin: {
        border: "none",
        borderRadius: "2px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        opacity: "1",
        transition: "0.3s",
        "&:hover": {
            opacity: "0.6"
        }
    },

    imgInstagram: {
        border: "none",
        borderRadius: "2px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        opacity: "1",
        "&:hover": {
            opacity: "0.6"
        }
    }

}

const useStyles = makeStyles(styles);

export default function Contacto() {
    const classes = useStyles();
    const linkTwitter = () => {
        window.open("https://twitter.com/FOPyME");
    };
    const linkFacebook = () => {
        window.open("https://www.facebook.com/fundacionobservatoriopyme");
    };
    const linkLinkedin = () => {
        window.open("https://www.linkedin.com/in/observatoriopyme/");
    };
    const linkInstagram = () => {
        window.open("https://www.instagram.com/observatoriopyme/");
    };
    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Métodos de Contacto</h4>
                </CardHeader>
                <GridContainer justify={"center"}>
                    <GridItem xs={2} sm={2} md={2}>
                        <Card>
                            <h4 className={classes.h4}>Seguinos en:</h4>
                            <GridContainer display={"inline-block"}>
                                <img className={classes.imgTwitter} src={logoTwitter} onClick={linkTwitter}></img>
                                <img className={classes.imgFacebook} src={logoFacebook} onClick={linkFacebook}></img>
                                <img className={classes.imgLinkedin} src={logoLinkeding} onClick={linkLinkedin}></img>
                                <img className={classes.imgInstagram} src={logoInstagram} onClick={linkInstagram}></img>
                            </GridContainer>
                        </Card>
                    </GridItem>
                    <GridItem xs={2} sm={2} md={3}>
                        <Card>
                            <p className={classes.p}>
                                TEL (54 11) 4381 3331
                            <br></br>
                            Avda. de Mayo 1147, piso 3.
                            <br></br>
                            (C1054AAP) Ciudad Autónoma de Buenos Aires
                        </p>
                        </Card>
                    </GridItem>
                </GridContainer>
            </Card>
        </div>
    );
}