import {configureStore} from '@reduxjs/toolkit';
import TodosReducer from './reducers/reducer.todos'

export const reduxStore = configureStore({
    reducer:{TodosReducer},preloadedState: loadFromLocalStorage()
})

function loadFromLocalStorage() {
    try {  
    let tempState = localStorage.getItem('todos')
    if(tempState === null) return undefined;
    return JSON.parse(tempState)


    } catch (error) {
        console.log('load from local storage error:', error)
    }
}