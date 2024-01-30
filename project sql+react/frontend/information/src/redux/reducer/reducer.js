import { combineReducers } from "redux";
import {inputReducer, reducerFavourite} from './mainReducer.js';


export default  combineReducers({
    texterea: inputReducer,
     data: reducerFavourite
}) 

