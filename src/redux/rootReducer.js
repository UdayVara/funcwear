import { combineReducers } from "redux";
import {loginReducer} from "./reducer/login-reducer";


export const rootReducer = combineReducers({
    login: loginReducer
})