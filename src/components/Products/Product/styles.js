import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    appBar: {
        position: 'relative',
        backgroundColor: '#fff',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',
    },
    checkoutButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '5px',
        },
    },
    modalTitle: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px',
        },
    }
}));
