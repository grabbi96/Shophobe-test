import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Alert } from "@material-ui/lab"
import Header from "../common/Header"
const Home = () => {
    const message = useSelector(state => state.meta.message)
    return (
        <React.Fragment>
            <h2>Home</h2>

            {message.signUpMes && (
                <Alert severity="success">{message.signUpMes}</Alert>
            )}
        </React.Fragment>
    );
}

export default Home;
