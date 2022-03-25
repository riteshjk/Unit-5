
// import { SUB_COUNT } from "./action";
import {TODO,DELETE} from "./action"


export const reducer =(store, {type ,payload}) =>{
    //console.log("Store",store.getState())
 switch(type){
  
    case TODO:
        return {...store, todo :payload};
    
    case DELETE:
        return {...store, todo :store.todo.filter((e)=>{
            return e.id!==payload
      
        })}
         default:
             return store;
 }
}