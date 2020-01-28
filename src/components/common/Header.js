import React from 'react';
import { AppBar, Container, Toolbar } from "@material-ui/core"
import "../../App.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { logout } from "../../store/action/userAction"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { useHeaderStyles } from "./Style"


const Header = () => {
    const classes = useHeaderStyles();
    const authCheck = useSelector(state => state.user.isUserAuthenticated)
    const dispatch = useDispatch()
    const history = useHistory()

    // logout Handler 
    const logoutHandler = () => {
        dispatch(logout(history))
    }
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Container>
                <Toolbar className={classes.toolbar}>

                    {/* If user not logged in */}
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

                    {/* If user logged in */}
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
