import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import favoriteReducer from './reducer/favoriteReducer'
import fetchData from './reducer/fetchReducer'

const reducer = combineReducers({
    favoriteReducer,
    fetchData
})

function logger(store) {
    return function(next) {
        return function(action) {
            next(action)
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger, ReduxThunk))

export default store