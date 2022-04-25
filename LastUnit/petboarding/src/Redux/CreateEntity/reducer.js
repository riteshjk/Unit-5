import {CREATE_ENTITY_SUCCESS,CREATE_ENTITY_FAILURE,CREATE_ENTITY_LOADING} from './action';
const initState={
    loading:false,
    error:false,
    entities:[],
    success:false

}

export const reducer_entity = (store=initState,{type,payload}) =>{

    switch(type){
        case CREATE_ENTITY_LOADING:
            return {...store,loading:true,error:false,success:false};
        case CREATE_ENTITY_SUCCESS:
            return {...store,loading:false,error:false,success:true,entities:[...payload]};
        case CREATE_ENTITY_FAILURE:
            return {...store,loading:false,error:true,success:false};
        default:
            return store;
    }
}