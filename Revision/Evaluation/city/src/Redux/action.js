export const ADD_CITY = "ADD_CITY";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";

export const addcountry=(payload)=>(dispatch)=>{
    const addrequest = add_country(payload);
    dispatch(addrequest);
}

export const addcity=(payload)=>(dispatch)=>{
    const addrequest = add_city(payload);
    dispatch(addrequest);
}
export const deletecountry=(payload)=>(dispatch)=>{
    const addrequest = delete_country(payload);
    dispatch(addrequest);
}


export const add_city=(payload)=>{
    return {
        type:ADD_CITY,
        payload
    }
}

export const add_country=(payload)=>{
    return {
        type:ADD_COUNTRY,
        payload
    }
}

export const delete_country=(payload)=>{
    return {
        type:DELETE_COUNTRY,
        payload
    }
}


