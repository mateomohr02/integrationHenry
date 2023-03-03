
export const addFav = (char) => {
    return {
        type: 'ADD_FAV',
        payload: char
    }
}

export const delFav = (id) => {
    return{
        type: 'DEL_FAV',
        payload: id
    }

}

export const filteredCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}

export const orderedCards = (id) => {
    return{
        type: 'ORDER',
        payload: id
    }
}