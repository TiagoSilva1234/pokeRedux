

function pokeReducer(state = [],action){
    switch(action.type){
    case "SET_DATA":
        return state = action.payload;
    
        default:
            return state;
    }
    return state;
}


export default pokeReducer;