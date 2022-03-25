import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export const TodoDetails=()=>{
    const [data,setData] = useState({});
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8080/todos/${id}`).then((response) => {
           // console.log(response.data)
           setData(response.data)
        })
    },[])

    function handlechange(){
        axios.patch(`http://localhost:8080/todos/${id}`,{status:"true"}).then((res)=>{
            //console.log(res.data)
            setData(res.data)
        })

    }
    return <div>
        
        <h1>Todo Details</h1>
        <div>
        <h1>{data.data}</h1>
       
        <button onClick={handlechange}>{data.status}</button>
        </div>
    </div>
}