import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {Container} from "@material-ui/core";

const tutorialSteps = [
    {
        label: '1. Удобный сервис. Самые популярные товары у нас в наличии',
    },
    {
        label: '2. Быстрая доставка по всему СНГ до двери курьером',
    },
    {
        label: '3. Безопасная оплата, гарантия возврата в случае неустойки',
    },
    {
        label: '4. Работаем "в чистую", вы всегда в курсе статуса заказа',
    },
    {
        label: '5. Не нашли что искали ? Звоните нам, и сразу найдем для вас =)',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        backgroundColor: '#f50057',
        color: '#ffffff',
    },
}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <h1>{tutorialSteps[activeStep].label}</h1>
            </Paper>
            <Container>
                <MobileStepper
                    style={{fontSize: '1.5rem'}}
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            След.
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                            Пред.
                        </Button>
                    }
                />
            </Container>
        </div>
    );
}
