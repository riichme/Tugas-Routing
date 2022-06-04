export const ADD_FAVORITE = 'favorite/setFavorite'
export const SET_POKEMON = 'fetch/setPokemon'

//Action creator
export function addToFavorites(payload) {
    return {type: ADD_FAVORITE, payload}
}

export function fetchPokemon() {
    return function(dispatch) {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then((response) => response.json())
        .then((data) => {
            dispatch({type: SET_POKEMON, payload: data.data})
        })
        .catch(console.log)
    }
}