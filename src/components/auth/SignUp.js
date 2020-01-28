import React from 'react';
import { CircularProgress, Avatar, Button, TextField, CssBaseline, Typography, Container } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert } from "@material-ui/lab"
import { useDispatch, useSelector } from "react-redux"
import { signUpAction } from "../../store/action/userAction"
import { useHistory } from "react-router"
import { useForm } from "react-hook-form";
import { signUpStyles } from "../common/Style"



export default function SignUp() {
    const classes = signUpStyles();
    const dispatch = useDispatch()
    const error = useSelector(state => state.error)
    const loading = useSelector(state => state.meta.isLoading)
    const history = useHistory()
    const { handleSubmit, register, errors } = useForm();

    // submit handler
    const onSubmit = values => {
        const { email, password } = values;
        const data = {
            email: email,
            password: password
        }
        dispatch(signUpAction(data, history))
    };

    // password error
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

                        {/* Email Input */}
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


                        {/* Password Input */}
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


                        {/* Submit Button */}
                        <Button
                            type="submit"
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