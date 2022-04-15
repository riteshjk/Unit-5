import React from "react";
import {v4 as uuid} from "uuid";
import {getTodosData} from "../Redux/Todos/action";
import {useDispatch,useSelector} from "react-redux";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { useParams,useNavigate } from "react-router-dom";


const initState={
    title:"",
    description:"",
    status:"",
    subtask:[],
    taga:{official:false,personal:false,others:false},
    date:""
};


const Container = styled.div`
    margin: 0;
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    height:100vh;
    gap:20px;
`;

const Grid1 = styled.div`
width:350px;
grid-column: 1/4;
border:1px solid black;
`
const Grid2 = styled.div`
width:350px;
grid-column: 4/13;
border:1px solid black;

`



const reducer =(store,{type,payload})=>{
    switch(type){
        case "title":
            return {...store,title:payload};
        case "description":
            return {...store,description:payload};
        case "status":
            return {...store,status:payload};
        case "UPDATE_SUBTASK":
            return {...store, subtask:[...store.subtask,payload]};
        case "tag":
            return {...store,taga:payload};
        case "date":
            return {...store,date:payload};
        case "TOGGLE_SUBTASK":
           const subtaskToggle=store.subtask.map(sub=>
             sub.id===payload.id?{...sub,status:payload.status}:sub
            )
            return {...store,subtask:subtaskToggle};
               
        case "DELETE_SUBTASK":
            return {...store, subtask:store.subtask.filter(subtask=>subtask.id!==payload)};

        case "RESET":
            return {...initState};
        
        case "UPDATE_FROM_SERVER":
            return {...store,...payload};

        default:
            return store;
    }
}




export const TodosEdit =()=>{
    const [state , dispatch] = React.useReducer(reducer,initState);

    const reduxDispatch = useDispatch();

    const [subtaskInputValue, setSubtaskInputValue] = React.useState("");

    const {title,description,status,subtask,taga,date}=state;

    const {token ,username} =useSelector((store) => store.login);

    const {todos} = useSelector((store)=>store.todos);

    const {id}= useParams();

    const navigate = useNavigate();
    React.useEffect(()=>{
        fetch(`http://localhost:8080/todos/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            dispatch({
                type:"UPDATE_FROM_SERVER",
                payload:res
            })
        })

    },[])

    const EditTask=()=>{
        const payload ={...state}
        fetch(`http://localhost:8080/todos/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)


        })
        .then(()=>reduxDispatch(getTodosData()))
        .then(()=>navigate("/"))


    }

    // const createNewTask = () =>{
    //     const payload={...state};
    //     fetch(`http://localhost:8080/todos`,{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(payload)
    //     })
    //     .then(()=>reduxDispatch(getTodosData()))
    //     .then(()=>dispatch({type:"RESET"}))
    
    // }
    return(
    

        <Container>
            <Grid1>
                <Sidebar token={token} username={username} todos={todos}/>
            </Grid1>
            <Grid2>

           <input type="text" placeholder=" Enter title" value={title} onChange={(e)=>{
                dispatch({type:"title",payload:e.target.value})
            }}/><br/>
              <input type="text" placeholder=" Enter description" value={description} onChange={(e)=>{
                dispatch({type:"description",payload:e.target.value})
            }}/><br/>

            <div>
                <input type="radio" name="status" value="inprogress" checked={status==="inprogress"} onChange={(e)=>{
                    dispatch({type:"status",payload:e.target.value})
                }}/>Inprogress

                <input type="radio" name="status" value="done" checked={status==="done"} onChange={(e)=>{
                    dispatch({type:"status",payload:e.target.value})
                }}/>Done

                <input type="radio" name="status" value="pending" checked={status==="pending"} onChange={(e)=>{
                    dispatch({type:"status",payload:e.target.value})
                }
                }/>Pending

            </div>
            <div>
                <label>
                    <input type="checkbox" name="taga" value="official" checked={taga.official} onChange={(e)=>{
                        dispatch({type:"tag",payload:{...taga,official:e.target.checked}})
                    }}/>Official
                </label>
                <br/>
                <label>
                    <input type="checkbox" name="taga" value="personal" checked={taga.personal} onChange={(e)=>{
                        dispatch({type:"tag",payload:{...taga,personal:e.target.checked}})
                    }}/>Personal
                </label>
                <br/>
                <label>
                    <input type="checkbox" name="taga" value="others" checked={taga.others} onChange={(e)=>{
                        dispatch({type:"tag",payload:{...taga,others:e.target.checked}})
                    }
                    }/>Others
                </label>
                <br/>
                <input type="date" value={date} onChange={(e)=>{
                    dispatch({type:"date",payload:e.target.value})
                }
                }/>

                <input type="text" value={subtaskInputValue} placeholder=" Enter subtask" onChange={(e)=>setSubtaskInputValue(e.target.value)}/>
                
               
                <button onClick={()=>{
                  const payload={
                        id:uuid(),
                        subtaskTitle:subtaskInputValue,
                        status:false,
                  }
                  dispatch({type:"UPDATE_SUBTASK",payload})
                  setSubtaskInputValue("")
                    
                }}>SUBTASK</button>
                <div>
                    {subtask.map((sub)=><div key={sub.id}>
                    <label>
                        <input type="checkbox" checked={sub.status} onChange={(e)=>{
                            dispatch({type:"TOGGLE_SUBTASK",payload:{id:sub.id , status:e.target.checked}})
                        }}/>{sub.subtaskTitle}
                       
                    </label>
                    <button onClick={()=>{
                        dispatch({type:"DELETE_SUBTASK",payload:sub.id})
                    }}>DELETE SUBTASK</button>
                    </div>
                    )}
                </div>
            </div>
            <button onClick={EditTask}>EDIT TASK</button>
         
            </Grid2>
        </Container>

    )
}