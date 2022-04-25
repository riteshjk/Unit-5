import axios from 'axios';
import {useDispatch} from 'react-redux';
export const CREATE_ENTITY_SUCCESS = ' CREATE_ENTITY_SUSSESS';
export const  CREATE_ENTITY_FAILURE = ' CREATE_ENTITY_FAILURE';
export const  CREATE_ENTITY_LOADING = " CREATE_ENTITY_LOADING";


export const createentitysuccess =(payload) =>({
   type: ' CREATE_ENTITY_SUCCESS',
   payload
});

export const createentityfailure =() =>({
    type: ' CREATE_ENTITY_SUCCESS',
    
 });

 export const createentityloading =() =>({
    type: ' CREATE_ENTITY_SUCCESS',
    
 });

 export const addentity=()=>()=>{
   dispatch(createentityloading());
   axios.post("http://localhost:8080/entity",payload).then((res)=>dispatch(createentitysuccess(payload))).catch((err)=>dispatch(createentityfailure(err)));
 }