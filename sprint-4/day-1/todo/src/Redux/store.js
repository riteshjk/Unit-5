import {createStore} from "redux"
import {reducer} from "./reducer"

// const rootReducer = combineReducers({
//     todo:todoReducer
// })


const loggerMiddleware = (store) => (next) =>(action)=>{
    next(action)
};

export const store =createStore(reducer,{todo:[]})



