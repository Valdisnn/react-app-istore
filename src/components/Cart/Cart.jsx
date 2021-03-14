import React from "react";
import {Container, Typography, Button, Grid, CssBaseline} from "@material-ui/core";
import {Link} from "react-router-dom";

import useStyles from './styles';
import CartItem from "./CartItem/CartItem";

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">В коризне нет товаров.
            <br/>
            <Link to="/" className={classes.link}> Начните покупки сейчас</Link>
        </Typography>
    );

    const FilledCart = () => (
        <React.Fragment>
            <CssBaseline/>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty}
                                  onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h5">Итог: {cart.subtotal.formatted_with_symbol}</Typography>
                <div className={classes.buttonBlock}>
                    <Button className={classes.emptyButton} size="medium" type="button" variant="contained"
                            color="secondary" onClick={handleEmptyCart}>Очистить</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="medium" type="button"
                            variant="contained"
                            color="secondary">Оформить</Button>
                </div>
            </div>
        </React.Fragment>
    );

    if (!cart.line_items) return 'Загрузка...';

    return (
        <Container style={{textAlign: 'center'}}>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom utterBottom>Корзина</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}

export default Cart;
