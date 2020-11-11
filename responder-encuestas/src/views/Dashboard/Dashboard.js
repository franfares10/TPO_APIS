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

<<<<<<< Updated upstream
export default function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.titulo}>Encuestas por responder</h4>
                </CardHeader>
                <GridContainer justify={"center"} display={"inline-block"}>
                            <GridItem xs={12} sm={12} md={5}>
                                <CustomInput
                                    className="barraBusq"
                                    formControlProps={{
                                        className: classes.margin + " " + classes.search,
                                        fullWidth: true,
                                    }}
                                    inputProps={{
                                        placeholder: "Buscar encuesta...",
                                        inputProps: {
                                            "aria-label": "Search"
                                        }
                                    }}
                                />
                                </GridItem>
                                <GridContainer justify={"center"} display={"inline-block"}>
                                    <GridItem>
                                        <Button className={classes.btnBusq} color="white" aria-label="edit" justIcon round>
                                            <Search />
                                        </Button>
                                    </GridItem>
                                    <GridItem>
                                        <h4 className={classes.h4}></h4>
                                        <RadioGroup defaultValue="tiempo" aria-label="radio" name="customized-radios" row>
                                            <FormControlLabel value="tiempo" control={<StyledRadio />} label="Tiempo Restante" />
                                            <FormControlLabel value="abc" control={<StyledRadio />} label="Alfabético" />
                                        </RadioGroup>                                
                                    </GridItem>
                            </GridContainer> 
                </GridContainer>
                <GridContainer justify={"center"}>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Procesos</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Logística</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Procesos</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Logística</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div><div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta Financiera</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Procesos</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                    <div className={classes.encuestaCard}>
                        <img src="https://cdn.smassets.net/assets/cms/cc/uploads/satisfaction-question-survey-question-types.png"></img>
                        <div className={classes.infoEncuestaCard}>
                            <h4><b>Encuesta de Logística</b></h4>
                            <p>Tiempo Restante: DD-HH:mm</p>
                        </div>
                        <Button className={classes.Button} href="/encuesta" color="primary">RESPONDER ENCUESTA</Button>
                    </div>
                </GridContainer>
            </Card>
        </div>
    );
}
=======
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
                Ultimas 24 horas.
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
                Ultimas 24 horas.
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
                Ultimas 24 horas.
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
>>>>>>> Stashed changes
