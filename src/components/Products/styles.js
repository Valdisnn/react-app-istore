import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        /*padding: theme.spacing(3),*/
        paddingTop: '24px'
    },
    root: {
        flexGrow: 1,
    },
    footer: {
        paddingTop: 0,
        marginBottom: 0,
        bottom: 0,
        backgroundColor: '#f50057',
        width: '100%',
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    titleTel: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    image: {
        marginRight: '10px',
    },
    policy: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: "auto",
        marginRight: 'auto',
        marginBottom: '15px',
        paddingBottom: '15px',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0,
        },
    },
    policyBtn: {
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
        },
    },
    policyTitle: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    policyClose: {
        padding: '16px 24px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 'auto',
            padding: '24px',
            paddingBottom: 0,
        },
    },
    map: {
        display: "flex",
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}));
