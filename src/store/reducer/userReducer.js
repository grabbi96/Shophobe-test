import {
    SET_CURRENT_USER
} from "../action/actionType";

const initialState = {
    isUserAuthenticated: false,
    user: {
        name: "sfasdf"
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isUserAuthenticated: action.payload ? true : false,
                user: action.payload
            };
        default:
            return state;
    }
}
