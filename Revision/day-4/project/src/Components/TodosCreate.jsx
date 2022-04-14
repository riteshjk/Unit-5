import React from "react";

const initState={
    title:"",
    description:"",
    status:"",
    subtaska:[],
    taga:{official:false,personal:false,others:false},
    date:""
};


const reducer =(store,{type,payload})=>{
    switch(type){
        case "title":
            return {...store,title:payload};
        case "description":
            return {...store,description:payload};
        case "status":
            return {...store,status:payload};
        case "subtask":
            return {...store,subtask:payload};
        case "tag":
            return {...store,taga:payload};
        case "date":
            return {...store,date:payload};
        default:
            return store;
    }
}




export const TodosCreate =()=>{
    const [state , dispatch] = React.useReducer(reducer,initState);

    const {title,description,status,subtask,taga,date}=state;
    return(
        <div>
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

                <input type="text" value={subtask} placeholder=" Enter subtask" onChange={(e)=>{
                    dispatch({type:"subtask",payload:e.target.value})
                }
                }/>
                <button onClick={()=>{
                    dispatch({type:"subtask",payload:subtask})
                    
                }}>Add Subtask</button>
            </div>

        </div>
    )
}