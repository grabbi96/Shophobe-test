import { SET_MESSAGE } from "./actionType"

export const setMessage = message => {

    return ({
        type: SET_MESSAGE,
        payload: message ? message : ""
    })
}