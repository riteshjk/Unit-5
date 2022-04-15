import { GET_TODOS,GET_TODOS_LOADING,GET_TODOS_ERROR  } from "./action";

const initState={
    loading: false,
    error: false,
    todos: []
    
};

export const todoReducer =(store=initState,{type,payload})=>{
    switch(type){
        case GET_TODOS:
            return {
                ...store,
                loading: false,
                error: false,
                todos:[...payload] 
            }
        case GET_TODOS_LOADING:
            return {
                ...store,
                loading: true,
                error: false,
                todos: []
            }
        case GET_TODOS_ERROR:
            return {
                ...store,
                loading: false,
                error: true,
                todos: []
            }
        default:
            return store;
    }
}

