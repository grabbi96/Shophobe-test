import { LOADING_STATE, SET_MESSAGE } from '../action/actionType'
const init = {
    isLoading: false,
    message: {}
}
const metaReducer = (store = init, action) => {
    switch (action.type) {
        case LOADING_STATE: {
            return {
                ...store,
                isLoading: action.payload
            }
        }
        case SET_MESSAGE: {
            return {
                ...store,
                message: action.payload
            }
        }
        default: return store
    }

}

export default metaReducer