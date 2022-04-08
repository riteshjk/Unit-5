import { createContext,useReducer } from "react";

export const FormContext= createContext();

const initialState={
    "name":"",
    "age":"",
    "date_of_birth":"",
    "state_of_Residence":"",
    "address":"",
    "pin_code":"",
}

const reducer =(state,action) =>{
    switch(action.type){
        case "UPDATE_NAME":
            return {
                ...state,
                name:action.payload
            }
        case "UPDATE_AGE":
            return {
                ...state,
                age:action.payload
    }
        case "UPDATE_DOB":
            return{
                ...state,
                date_of_birth:action.payload
            }
        case "UPDATE_STATE":
            return{
                ...state,
                state_of_Residence:action.payload
            }
        case "UPDATE_ADDRESS":
            return {
                ...state,
                address:action.payload
            }
        case "UPDATE_PIN":
            return{
                ...state,
                pin_code:action.payload
            }
            default:
                throw new Error
}}

export function FormContextProvider({children}){

    const [state,dispatch]=useReducer(reducer,initialState)
    const {name,age,date_of_birth,state_of_Residence,address,pin_code}=state;
    return (
        <FormContext.Provider value={{name,age,date_of_birth,state_of_Residence,address,pin_code,dispatch}}>
            {children}
        </FormContext.Provider>
    );
}