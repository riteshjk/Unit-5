import axios from "axios";
import {useEffect,useState} from "react";
import { Link } from "react-router-dom";

export const Home = ()=>{
    const [data,setData] = useState([]);
    const [city,setCity] = useState("");
    const [verify,setVerify] = useState("");
    const [showdata,setshowdata] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/entity").then((res)=>{
            setData(res.data);
            setshowdata(res.data)
        })
    },[])
    const handlefilter=(value)=>{
        console.log(value);
       let x= data.filter((el)=>{
           return el.city==value || el.verify ==value;
        })
        
        setData(x);

    }
    const handlereset=()=>{
        setData(showdata)
    }

    const handlesort=(value)=>{
        console.log(value)
        let x= data.sort((a,b)=>{
            return Number(a.value)>Number(b.value) ;
        })
        console.log(x)
        setData(x);
    }

    return (
        <div>
            <h1>Home</h1>
            <input type="text" placeholder="" onChange={(e)=>(setCity(e.target.value))}/>
            <button onClick={()=>{handlefilter(city)}}>Filter By City</button>
            <br/>
        
            <input type="text" placeholder=""  onChange={(e)=>(setVerify(e.target.value))}/>
            <button onClick={()=>{handlefilter(verify)}}>Filter By verified</button><br/>
            <button onClick={handlereset}>Reset</button>
            <button onClick={()=>(handlesort("cost"))}>Sort By Cost</button>
            <button onClick={()=>(handlesort("rating"))}>Sort By Rating</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Capacity</th>
                        <th>Cost Per day</th>
                        <th>Verified</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return (
                            <tr key={index}>
                                <Link to={`/listing/${item.id}`}><td>{item.name}</td></Link>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td>{item.capacity}</td>
                                <td>{item.cost}</td>
                                <td>{item.verify}</td>
                                <td>{item.rating}</td>
                            </tr>
                        )
                    }
                    )}
                    </tbody>
            </table>
        </div>
    )
}