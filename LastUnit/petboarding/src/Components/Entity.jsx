import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


export const Entity = ()=>{
    const [data,setData] = useState({});
    const {id}=useParams();
    console.log(id);


    useEffect(()=>{
        axios.get(`http://localhost:8080/entity/${id}`).then((res)=>{
            setData(res.data);
        })
    },[])

    return (
        <div>
           <h1>Entity</h1>
           <div style={{
               "border":"1px solid black",
               "backgroundColor":"lightblue",
           }}>
           <h3>Name :{data.name}</h3>
           <h3>City :{data.city}</h3>
           <h3>Capacity :{data.capacity}</h3>
           <h3>Rating :{data.rating}</h3>
           </div>
            </div>

    )
}