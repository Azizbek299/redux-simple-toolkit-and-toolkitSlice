import {combineReducers, configureStore} from '@reduxjs/toolkit';
import toolkitSlice from './toolkitSlice';
// import toolkitReducer from './toolkitReducer';     for simple toolkit

const rootReducer = combineReducers({
    toolkit:toolkitSlice,                     //    toolkit:toolkitReducer,    for simple toolkit
})

export const store = configureStore({
    reducer:rootReducer,
})