import React from 'react';
import { useSelector } from "react-redux"
import { Alert } from "@material-ui/lab"
const Home = () => {
    const message = useSelector(state => state.meta.message)
    return (
        <React.Fragment>
            <h2>Home</h2>

            {/* sign up successful message */}
            {message.signUpMes && (
                <Alert severity="success">{message.signUpMes}</Alert>
            )}
        </React.Fragment>
    );
}

export default Home;
