import React, {useState} from "react";
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";

import logo from '../../assets/apple.png';

import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Корзина</p>
            </MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="iStore" height="25px" className={classes.image} /> <span style={{color: '#f50057'}}>iStore</span>
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" area-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </React.Fragment>
    )
}

export default Navbar;
