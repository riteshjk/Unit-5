export const GET_TODOS= "GET_TODOS";
export const GET_TODOS_LOADING= "GET_TODOS_LOADING";
export const GET_TODOS_ERROR= "GET_TODOS_SUCCESS";

export const getTodos=(payload)=>({
    type: GET_TODOS,
    payload
});

export const getTodosLoading=()=>({
    type: GET_TODOS_LOADING
});

export const getTodosError=(payload)=>({
    type: GET_TODOS_ERROR

});

export const getTodosData = () =>(dispatch)=>{
    dispatch(getTodosLoading());
    fetch(`http://localhost:8080/todos`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getTodos(res)))
    .catch((err)=>console.log(err))
}
