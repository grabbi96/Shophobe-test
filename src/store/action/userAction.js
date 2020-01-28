
import app from "../../components/base"
import { SET_CURRENT_USER } from "./actionType"
import { setError } from "./errorAction"
import { loading } from "./loadingAction"
import { setMessage } from "./messageAction"

// Sign up redux thunk action
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

// Login redux thunk action
export const loginAction = (data, history) => async dispatch => {
    dispatch(loading(true))
    try {
        let user = await app
            .auth()
            .signInWithEmailAndPassword(data.email, data.password);

        dispatch(setError())
        dispatch(loading(false))
        dispatch(setMessage({ loginMes: "Login successfully" }))

        localStorage.setItem("userToken", user.user.uid)
        dispatch(setUser({ name: "user" }))

        history.push("/profile");
    } catch (error) {
        dispatch(loading(false))
        dispatch(setMessage({}))
        dispatch(setError({ loginError: error.message }))
    }
}

// Logout redux thunk action
export const logout = (history) => dispatch => {
    localStorage.removeItem("userToken")
    dispatch(setUser(false))
    history.push("/login")
}

// Set user dispatch
export const setUser = (userObj) => {
    return {
        type: SET_CURRENT_USER,
        payload: userObj
    }
}