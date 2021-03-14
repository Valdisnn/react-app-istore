import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import {AddShoppingCart} from "@material-ui/icons";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    CssBaseline,
} from "@material-ui/core";

import useStyles from './styles';

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const buyAndClose = () => {
        onAddToCart(product.id, 1)
        handleClose()
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <Button color="secondary" className={classes.checkoutButton} size="medium" type="button"
                            variant="contained" onClick={handleClickOpen('body')}>Подробнее</Button>
                    <IconButton area-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart style={{color: '#f50057'}}/>
                    </IconButton>
                </CardActions>
            </Card>
            {/************************************************************************************/}
            <CssBaseline/>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <DialogTitle id="scroll-dialog-title">{product.name}</DialogTitle>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close"
                                style={{fontWeight: 900, color: '#f50057'}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        <CardMedia className={classes.media} image={product.media.source} onClick={handleClickOpen}
                                   style={{
                                       maxWidth: '450px',
                                       maxHeight: '100px',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       marginTop: '-3%',
                                       marginBottom: '-5%',
                                       zIndex: '-100'
                                   }}/>
                        <Typography className={classes.modalTitle} variant="h3" gutterBottom
                                    style={{textAlign: 'center', marginTop: '15px'}}>
                            Технические характеристики
                        </Typography>
                        <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"
                                    color="textSecondary" style={{margin: '35px', marginLeft: '15%'}}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <IconButton area-label="Add to Cart" onClick={buyAndClose}
                                style={{color: '#f50057'}}>
                        <AddShoppingCart/>
                        <small>В корзину</small>
                    </IconButton>
                </DialogActions>
            </Dialog>
            {/************************************************************************************/}
        </div>
    )
}

export default Product;
