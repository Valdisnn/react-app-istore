import React, {useState, useEffect} from "react";
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    CircularProgress,
    Divider,
    Button,
    CssBaseline
} from "@material-ui/core";


import {commerce} from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from './styles';
import {Link, useHistory} from "react-router-dom";

const steps = ['Адрес доставки', 'Оплата'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

                    setCheckoutToken(token);
                } catch {
                    if (activeStep !== steps.length) history.push('/');
                }
            };
            // eslint-disable-next-line
            generateToken();
        }
        // eslint-disable-next-line
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    };

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 3000)
    }

    let Confirmation = () => order.customer ? (
        <React.Fragment>
            <div>
                <Typography variant="h5">Спасибо за
                    покупку, {order.customer.firstname} {order.customer.lastname} !</Typography>
                <Divider className={classes.divider}/>
                <Typography variant="subtitle2">№ Заказа: {order.customer_reference}</Typography>
            </div>
            <br/>
            <Button component={Link} variant="outlined" type="button" to="/">Вернуться в магазин</Button>
        </React.Fragment>
    ) : isFinished ? (
        <React.Fragment>
            <div>
                <Typography variant="h5">Спасибо за покупку, ...</Typography>
                <Divider className={classes.divider}/>
            </div>
            <br/>
            <Button component={Link} variant="outlined" type="button" to="/">Вернуться в магазин</Button>
        </React.Fragment>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );

    if (error) {
        <>
            <Typography variant="h5">Ошибка: {error}</Typography>
            <br/>
            <Button component={Link} variant="outlined" type="button" to="/">Вернуться в магазин</Button>
        </>
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep}
                       onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeout={timeout}/>

    return (
        <React.Fragment>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Оформление заказа</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                </Paper>
            </main>
        </React.Fragment>
    )
}

export default Checkout;
