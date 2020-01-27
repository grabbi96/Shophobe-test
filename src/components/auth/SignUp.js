import React from 'react';
import { CircularProgress } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from "@material-ui/lab"
import app from "../base";
import { useDispatch, useSelector } from "react-redux"
import { signUpAction } from "../../store/action/userAction"
import { useHistory } from "react-router"
import { useForm } from "react-hook-form";


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const error = useSelector(state => state.error)
    const loading = useSelector(state => state.meta.isLoading)
    const history = useHistory()

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        const { email, password } = values;

        const data = {
            email: email,
            password: password
        }
        dispatch(signUpAction(data, history))
    };

    if (errors.password) {
        if (errors.password.type === 'minLength') {
            errors.password = "You must provide 6 character"
        }
        else if (errors.password.type === 'required') {
            errors.password = "Required "
        }
    }
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
        </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        {error.signUpError &&
                            <Alert severity="error"> {error.signUpError}</Alert>}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            autoComplete="email"
                            error={errors.email ? true : false}
                            helperText={errors.email ? errors.email.message : null}
                            inputRef={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />

                        {/* <input
                            name="email"
                            ref={register}
                        /> */}

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={errors.password ? true : false}
                            helperText={errors.password ? errors.password : null}
                            inputRef={register({
                                required: true,
                                minLength: 6,
                            })}
                        />

                        <Button
                            type="submit"
                            // fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        > {loading ? <CircularProgress color="secondary" /> : 'Sign Up'} </Button>

                    </form>
                </div>

            </Container >
        </React.Fragment>

    );
}