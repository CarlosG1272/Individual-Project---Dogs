import {legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducer/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ; 

 const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(rootReducer, applyMiddleware(thunk))
export default store