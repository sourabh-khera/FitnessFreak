import { combineReducers } from 'redux'
import user from './user.reducer'
import formValidation from './validation'
import {postReducer} from "./post"
import {exerciseReducer} from "./exercise"

export default combineReducers({
    user,
    formValidation,
    postReducer,
    exerciseReducer
})