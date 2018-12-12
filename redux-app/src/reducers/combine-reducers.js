import {combineReducers} from "redux"

import UsersReducers from './reducer-users'
import MoviesReducers from './reducer-movies'

import ReducerUserClicked from './reducer-userclicked'

const allReducers= combineReducers({
    users:UsersReducers,
    movies:MoviesReducers,
    clickedUser:ReducerUserClicked
})

export default allReducers