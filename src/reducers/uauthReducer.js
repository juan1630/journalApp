import { types } from "../types/types";

// los reducers reciben 2 cosas, el state y el action
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.loggin:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }

        case types.logout:
            return {}
        
        default:
            return state;
    }
}