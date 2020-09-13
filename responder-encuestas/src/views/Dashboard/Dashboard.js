import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/encuestasStyle.js";
import CardHeader from "components/Card/CardHeader";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card"
import CustomInput from "components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(styles);

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <Card>
            <CardHeader color="primary">
                            <h4 className={classes.titulo}>Encuestas por responder</h4>
                        </CardHeader>
                <GridContainer> 
                    <GridItem xs={12} sm={12} md={12}>
                        <GridContainer justify={"center"} display={"inline-block"}>
                            <GridItem>
                                <div className={classes.searchWrapper}>
                                    <CustomInput
                                        formControlProps={{
                                            className: classes.margin + " " + classes.search
                                        }}
                                        inputProps={{
                                            placeholder: "Buscar encuesta...",
                                            inputProps: {
                                                "aria-label": "Search"
                                            }
                                        }}
                                    />
                                    <Button color="white" aria-label="edit" justIcon round>
                                        <Search />
                                    </Button>
                                </div>
                            </GridItem>
                            <GridItem xs={2} sm={3} md={3}>
                                    <h4 className={classes.h4}></h4>
                                    <RadioGroup defaultValue="tiempo" aria-label="radio" name="customized-radios" row>
                                        <FormControlLabel value="tiempo" control={<StyledRadio />} label="Tiempo Restante" />
                                        <FormControlLabel value="abc" control={<StyledRadio />} label="Alfabético" />
                                    </RadioGroup>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
                <GridContainer justify={"center"}>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Procesos</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Logística</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Procesos</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Logística</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div><div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Procesos</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Logística</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                </GridContainer>
            </Card>
        </div>
    );
}
