
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_FAV':
            return {...state, myFavorites:[...state.myFavorites, action.payload]}
        case 'DEL_FAV':
            let filteredFavs = state.myFavorites.filter(fav => fav.detailId !== action.payload)
            return { myFavorites: filteredFavs}
        case 'FILTER':
            let filteredChars = state.allCharacters.filter(char => char.gender == action.payload)
            return{...state, myFavorites:filteredChars}
        
        default:
            return{...state}
        }
}

export default reducer;