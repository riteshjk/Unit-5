import {useState,useEffect} from "react"
import { addtodo,deletetodo } from "../Redux/action";
import {useDispatch,useSelector} from "react-redux";
import { nanoid } from 'nanoid'
import axios from "axios"
import { Link } from "react-router-dom";

export const Todo=()=>{

    
     const dispatch = useDispatch();
     const todos = useSelector((store)=>(store.todo))

     const [state ,setState] = useState({
         id:"",
         data:"",
        status:"false",
     })
    function handlechange(){
       // dispatch(addtodo(state))
        axios.post("http://localhost:8080/todos",state).then(getdata
        //console.log(res)
        )
    }

    function handleinput(e){
        //console.log(e.target.value);
        setState({
            id:nanoid(),
            data:e.target.value,
            status:"false",

        })
    }

    function handlechanged(id){
       console.log(id)
       //dispatch(deletetodo(id))
       axios.delete(`http://localhost:8080/todos/${id}`).then(getdata)
    }

    function getdata(){
        axios.get("http://localhost:8080/todos").then((res)=>{
        console.log(res.data)
        dispatch(addtodo(res.data))
        })
    }

    useEffect(() => {
        getdata()
    },[])

    return (
        <div>
            <input type="text" placeholder="type your name" onChange={handleinput}/>
            <button onClick={handlechange}>Add</button>
            <div>
            {todos.map((el,i)=>{
                return (<><Link to={`/todo/${el.id}`}><div>
                    {i+1}.{el.data}
                    
                </div></Link><button onClick={()=>{
                        handlechanged(el.id)
                    }}>Delete</button></>
                )
            })}
            </div>
            
        </div>
    )
}