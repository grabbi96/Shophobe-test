import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button, makeStyles } from "@material-ui/core"
import "../../App.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../../store/action/userAction"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));


const Header = () => {
    const classes = useStyles();
    const authCheck = useSelector(state => state.user.isUserAuthenticated)
    const dispatch = useDispatch()
    const history = useHistory()


    const logoutHandler = () => {
        dispatch(logout(history))
    }
    console.log(authCheck)
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Container>
                <Toolbar className={classes.toolbar}>
                    {/* <Typography variant="h6" color="inherit" className={classes.toolbarTitle}>
                        ShopHobe Test
          </Typography> */}
                    {!authCheck && (
                        <nav>
                            <Link variant="button" color="textPrimary" to="/" className={classes.link}>
                                Home
            </Link>
                            <Link variant="button" color="textPrimary" to="/login" className={classes.link}>
                                Login
            </Link>
                            <Link variant="button" color="textPrimary" to="/signUp" className={classes.link}>
                                Sign Up
            </Link>
                        </nav>
                    )}

                    {authCheck && (
                        <nav>
                            <Link variant="button" color="textPrimary" to="/profile" className={classes.link}>
                                Profile
            </Link>
                            <Link variant="button" color="textPrimary" to="/sitting" className={classes.link}>
                                Sitting
            </Link>
                            <Link color="textPrimary" onClick={() => logoutHandler()} to="/" className={classes.link}>
                                Log out
            </Link>
                        </nav>
                    )}


                </Toolbar>
            </Container>

        </AppBar>
    );
}

export default Header;
