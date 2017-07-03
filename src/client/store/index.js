/**
 * Created by sourabh on 27/6/17.
 */

import {reduxMiddlware} from "../middlewares/index"
import {applyMiddleware, createStore} from "redux"
import {userReducer} from "../reducers/index"


const middlewares = applyMiddleware(...reduxMiddlware);
const store = createStore(userReducer, middlewares);
export default store;