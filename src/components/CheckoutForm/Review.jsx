import React from "react";
import {Typography, List, ListItem, ListItemText} from "@material-ui/core";

const Review = ({checkoutToken}) => {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Итого :</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Кол-во: ${product.quantity}`}/>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="К оплате :" />
                    <Typography variant="h6" style={{fontWeight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
                <ListItemText secondary="* Стоимость доставки не указана, но она войдет в итоговый чек"/>
            </List>
        </React.Fragment>
    )
}

export default Review;
