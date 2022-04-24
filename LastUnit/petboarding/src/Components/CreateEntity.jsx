import {useDispatch} from 'react-redux';
import {addentity} from "../Redux/CreateEntity/action";
import { useState } from 'react';
import axios from "axios";

export const CreateEntity = ()=>{
    const dispatch = useDispatch();
   const [data,setData] = useState({});
   const handlechnage =(e)=>{
    console.log(e.target.value);
    const {className,value}=e.target;
    setData({...data,[className]:value});
   }

    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:8080/entity",data).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div> 
            <h1>CreateEntity</h1>
            <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Add Name" className="name" onChange={handlechnage}/><br/>
            <input type="text" placeholder="Add City"  className="city" onChange={handlechnage}/><br/>
            <input type="text" placeholder="Add Address" className="address" onChange={handlechnage}/><br/>
            <input type="text" placeholder="Add Capacity" className="capacity" onChange={handlechnage}/><br/>
            <input type="text" placeholder="Cost Per day" className="cost"  onChange={handlechnage}/><br/>
            <input type="text" placeholder="Verified" className="verify"  onChange={handlechnage}/><br/>
            <input type="text" placeholder="Rating" className="rating" onChange={handlechnage}/><br/>
            <input type="submit"/>
            </form>

            </div>
    )
}