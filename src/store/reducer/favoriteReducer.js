import {ADD_FAVORITE} from '../action'

const initialState = {
    favorite: []
}

function favoriteReducer(state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case ADD_FAVORITE:
                return {...state, favorite: state.favorite.concat(payload)}
        default:
            return state
    }
}

export default favoriteReducer
