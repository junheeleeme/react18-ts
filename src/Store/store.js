import { createStore, combineReducers } from 'redux'
import { theme } from './Reducers/theme'


const rootReducer = combineReducers({
    theme
})

export const store = createStore(rootReducer)