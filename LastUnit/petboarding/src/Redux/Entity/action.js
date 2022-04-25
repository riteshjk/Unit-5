import axios from 'axios';
import {useDispatch} from 'react-redux';
export const ENTITY_SUCCESS = 'ENTITY_SUSSESS';
export const ENTITY_FAILURE = 'ENTITY_FAILURE';
export const ENTITY_LOADING = "ENTITY_LOADING";


export const entitysuccess =(payload) =>({
   type: 'ENTITY_SUCCESS',
   payload
});

export const entityfailure =() =>({
    type: 'ENTITY_SUCCESS',
    
 });

 export const entityloading =() =>({
    type: 'ENTITY_SUCCESS',
    
 });

//  export const addentity=()=>()=>{
//    dispatch(entityloading());
//    axios.post("http://localhost:8080/entity",payload).then((res)=>dispatch(entitysuccess(payload))).catch((err)=>dispatch(entityfailure(err)));
//  }

 
 
