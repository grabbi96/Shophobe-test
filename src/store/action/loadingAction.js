import { LOADING_STATE } from "./actionType"

export const loading = data => {

    return ({
        type: LOADING_STATE,
        payload: data ? data : false
    })
}