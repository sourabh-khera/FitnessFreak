import { reduxMiddlware } from "../middlewares/index"
import { applyMiddleware, createStore } from "redux"
import reducer from "../reducers/index"


const middlewares = applyMiddleware(...reduxMiddlware);
const store = createStore(reducer, middlewares);
export default store;