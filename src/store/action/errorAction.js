import { CATCH_ERROR } from "./actionType"

export const setError = error => {

    return ({
        type: CATCH_ERROR,
        payload: { error: error ? error : "" }
    })
}