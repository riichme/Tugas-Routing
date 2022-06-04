import {SET_POKEMON} from '../action.js'

const initialState = {
    dataPokemon: []
}

export default function fetchData (state = initialState, action) {
    const {type, payload} = action
    switch(type){
        case SET_POKEMON:
            return {...state, dataPokemon: state.dataPokemon.concat(payload)}
        default:
            return state
    }
}