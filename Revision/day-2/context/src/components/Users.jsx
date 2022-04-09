import axios from "axios";
import { useEffect,useState } from "react";

export const Users=()=>{  
    const [data,setData]=useState([]);  
    
    useEffect(()=>{
        axios.get("http://localhost:8080/users").then((res)=>{
            setData(res.data)
        })
    },[])

    return (
        <div>

<table>

  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Date_Of_Birth</th>
    <th>state_of_Residence</th>
    <th>address</th>
    <th>pin_code</th>

  </tr>
        {data.map((item)=>{
            return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.state_of_Residence}</td>
                    <td>{item.address}</td>
                    <td>{item.pin_code}</td>
                </tr>
            )
        }
  
        )}
</table>
    
        </div>
    )



}