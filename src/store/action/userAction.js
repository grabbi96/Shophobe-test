import { useHistory } from "react-router";
import app from "../../components/base"
import { SET_CURRENT_USER } from "./actionType"
import { setError } from "./errorAction"
import { loading } from "./loadingAction"
import { setMessage } from "./messageAction"
export const signUpAction = (data, history) => async dispatch => {
    dispatch(loading(true))
    try {
        await app
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);

        dispatch(setError())
        dispatch(loading(false))
        dispatch(setMessage({ signUpMes: "account created successfully" }))
        history.push("/");
    } catch (error) {
        dispatch(loading(false))
        dispatch(setMessage({}))
        dispatch(setError({ signUpError: error.message }))
    }
}


export const loginAction = (data, history) => async dispatch => {
    dispatch(loading(true))
    try {
        let user = await app
            .auth()
            .signInWithEmailAndPassword(data.email, data.password);

        dispatch(setError())
        dispatch(loading(false))
        dispatch(setMessage({ loginMes: "Login successfully" }))
        localStorage.setItem("userToken", user.user.refreshToken)
        dispatch(setUser({ name: "user" }))
        history.push("/profile");
    } catch (error) {
        dispatch(loading(false))
        dispatch(setMessage({}))
        dispatch(setError({ loginError: error.message }))
    }
}

export const logout = (history) => dispatch => {
    localStorage.removeItem("userToken")

    dispatch(setUser(false))
    history.push("/")
}

export const setUser = (userObj) => {
    return {
        type: SET_CURRENT_USER,
        payload: userObj
    }
}