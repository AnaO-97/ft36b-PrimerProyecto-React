const stateInicial = {
    myFavorites :[]
};

export function reducer (state = stateInicial, action){
    const {type,payload} = action;
    switch (type) {
        case 'ADD_FAV':
            return({
                ...state,
                myFavorites : [...state.myFavorites, payload]
            });
        
        case 'REMOVE_FAV':
            return({
                ...state,
                myFavorites : state.myFavorites.filter((personaje)=>{
                    return (personaje.id !== parseInt(payload,10));
                })
            })
    
        default:
            return({...state});
    }
}