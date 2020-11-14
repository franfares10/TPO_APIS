import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "components/Card/Card"
import CardHeader from "components/Card/CardHeader"

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridContainer'



const tutorialSteps = [
    {
        label: '',
        imgPath:
            'https://i.ibb.co/tqKLBSL/paso0.jpg',
    },
    {
        label: '',
        imgPath:
            'https://i.ibb.co/qpw59Pt/paso2.png',
    },
    {
        label: '',
        imgPath:
            'https://i.ibb.co/c6RST4D/paso3.png',
    },
    {
        label: '',
        imgPath:
            'https://i.ibb.co/TKtZJCN/paso4.png',
    },
    {
        label: '',
        imgPath:
            'https://i.ibb.co/60Yznrh/paso5.png',
    },
    {
        label: '',
        imgPath: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png',
        alt: ''
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    Button: {
        backgroundColor: "rgb(30, 154, 159)",
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    titulo: {
        fontSize: "20px",
        paddingTop: "0px",
        margin: "0"
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        display: 'block',
    },
}));


function getSteps() {
    return ['Pestaña Encuesta', 'Responder Encuesta', 'Agregar Respuesta', 'Botón Enviar Respuestas', 'Finalizar Enucesta'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Para empezar a responder una encuesta dirigase a la pestaña de "Encuestas" en el menú.".`;
        case 1:
            return 'Pulse el botón "Responder Encuesta"';
        case 2:
            return `Una vez en la encuesta, responda las preguntas solicitadas.`;
        case 3:
            return 'Si lo desea puede cambiar de pestañas libremente. No se preocupe por sus respuestas, se guardan automaticamente.';
        case 4:
            return 'Una vez contestadas todas las preguntas presione el botón "Enviar Respuestas" para finalizar la encuesta.Recuerde que para hacerlo primero debe contestar todas'
            +' las preguntas obligatorias.'
        default:
            return 'Unknown step';
    }
}

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div className={classes.root}>
            <GridContainer justify={"center"}>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary"><h4 className={classes.titulo}>Instructivo</h4></CardHeader>
                        <GridContainer direction={"row"} justify={"center"} alignItems={"center"} spacing={8}>
                            <GridItem xs={3}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((label, index) => (
                                        <Step key={label}>
                                            <StepLabel disabled="true">{label}</StepLabel>
                                            <StepContent>
                                                <Typography>{getStepContent(index)}</Typography>
                                                <div className={classes.actionsContainer}>
                                                    <div>
                                                        <Button
                                                            disabled={activeStep === 0}
                                                            onClick={handleBack}
                                                            className={classes.button}
                                                        >
                                                            Atras
                                            </Button>
                                                        <Button
                                                            variant="contained"
                                                            onClick={handleNext}
                                                            className={classes.button}
                                                        >
                                                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>
                                {activeStep === steps.length && (
                                    <Paper square elevation={0} className={classes.resetContainer}>
                                        <Button onClick={handleReset} className={classes.button}>
                                            Volver a empezar
                            </Button>
                                    </Paper>
                                )}
                            </GridItem>
                            <GridItem xs={3}>
                                <div className={classes.root}>
                                    <img
                                        className={classes.img}
                                        src={tutorialSteps[activeStep].imgPath}
                                        alt={tutorialSteps[activeStep].label}
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}