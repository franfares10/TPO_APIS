import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from "components/Card/Card"
import CardHeader from "components/Card/CardHeader"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridContainer'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: '',
        imgPath: 'https://i.ibb.co/Y251s6P/74d35ed6e0bb54ad754b6615fc894a9d.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/CKp6Qpm/17b074073ec597ce831cf2ce5d20c481.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/3f0sNFv/7432a231b7152f536127289bf1526c85.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/B37qb2h/19d338e79d01d57806f12dddf7cb7bdd.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/rMG5nW3/79b3b45ea17f092e62cb63228b2bbfbb.png',
    },
    {
        label: '',
        imgPath:'',
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
        paddingTop: "10px",
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
    return ['Pestaña Lanzar Encuesta', 'Seleccionar Encuesta', 'Seleccionar Empresas', 'Botón Send', 'Encuesta Lanzada'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Para lanzar una nueva Encuesta dirijase al apartado de "New Poll" en el Menu.`;
        case 1:
            return 'Le apareceran todas las encuestas disponibles a realizar, seleccione una clickeando en el boton "Mostrar Empresas".';
        case 2:
            return `Se le desplegara un listado de empresas, seleccione las empresas que desea enviarle la Encuesta.`;
        case 3:
            return 'Una vez seleccionadas las empresas, presione en el boton "Send" para lanzar la encuesta.';
        case 4:
            return 'Su encuesta ya se ha lanzado a las empresas correspondientes!.'
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

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    function SwipeableTextMobileStepper() {
        const theme = useTheme();
        const [activeStep, setActiveStep] = React.useState(0);
        const maxSteps = tutorialSteps.length;
    }

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