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
        imgPath: 'https://i.ibb.co/PwWpG5f/paso1obs.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/J2kwVcK/paso2obs.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/rHD1pbw/paso3obs.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/Xy3QFs7/paso4obs.png',
    },
    {
        label: '',
        imgPath:
        'https://i.ibb.co/98fg0zB/paso5obs.png',
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
            return `Para lanzar una nueva Encuesta diríjase al apartado de "Lanzar Encuesta" en el Menú.`;
        case 1:
            return 'Le aparecerán todas las encuestas disponibles a realizar, seleccione una clickeando en el botón "Mostrar Empresas".';
        case 2:
            return `Se le desplegará un listado de empresas, deberá indicar un título para el lanzamiento y una fecha de vencimiento para el mismo. Luego 
            seleccione las empresas a las que desea enviarle la Encuesta.`;
        case 3:
            return 'Una vez seleccionadas las empresas, presione en el botón "Lanzar" para lanzar la encuesta.';
        case 4:
            return 'Aparecerá una notificación en el margen inferior derecho de confirmación que le indicará que la encuesta ha sido lanzada exitosamente.'
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