import { ADD_CITY, ADD_COUNTRY,DELETE_COUNTRY } from "./action";


const initState={
    cities:[],
    loaded:false,
    error:false
}

export const addreducer =(store=initState,{type,payload})=>{
    console.log(payload)
    switch(type){
        case ADD_CITY:
            return {
                ...store,
                 cities:[...payload]
                
            }
        case ADD_COUNTRY: 
            return {
                ...store,
                cities:[...store.cities,payload]
            }
        case DELETE_COUNTRY:
    return {
        ...store,
        cities:store.cities.filter(city=>city.id!==payload)
    }           
        default:
            return store
    }
}