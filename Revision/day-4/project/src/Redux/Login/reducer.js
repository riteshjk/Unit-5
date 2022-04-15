
import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_LOADING,LOGOUT } from "./action";

const initState={
    isLoading:false,
    isAuthenticated:false,
    error:false,
    token:"",
    username:"",
}

export const loginReducer=(store=initState,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...store,
                isLoading:false,
                isAuthenticated:true,
                error:false,
                token:payload.token,
                username:payload.username
            }
        case LOGIN_FAILURE:
            return {
                ...store,
                isLoading:false,
                isAuthenticated:false,
                error:true,
                token:"",
                username:""
            }
        case LOGIN_LOADING:
            return {
                ...store,
                isLoading:true,
                isAuthenticated:false,
                error:false,
                token:"",
                username:""
            }
        case LOGOUT: 
            return {
                ...initState
            }
        default:
            return store;
    }
}