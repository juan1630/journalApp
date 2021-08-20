import { types } from "../types/types"

export const login = (uid, displayName) =>  ({
        type: types.loggin,
     
        payload: {
            uid,
            displayName,
        }
});