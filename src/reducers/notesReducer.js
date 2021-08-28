
// incializacion del state 

const initialState = {
    notes: [],
    active: null
}

// creaccion del reducer 
export const notesReducer = (state = initialState, action) => {

    
    switch (action.type){

        default:
            return state;
    }

}