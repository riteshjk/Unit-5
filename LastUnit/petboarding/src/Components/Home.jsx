import axios from "axios";
import {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"


export const Home = ()=>{
    const [data,setData] = useState([]);
    const [city,setCity] = useState("");
    const [verify,setVerify] = useState("");
    const [showdata,setshowdata] = useState([]);
    const navigate = useNavigate();

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

    const handlesort=(val)=>{
        //console.log(value)
      let x=data.sort((a,b)=>{
          return Number(a[val])-Number(b[val])
      })
      setData([...x]);
        //console.log(x)
    }
   

    return (
        <div style={{
            //"backgroundColor":"gray"
        }}>
            <h1>Home</h1>
            <button onClick={()=>navigate("/listing/create")} style={{
                "float": "left",
                "margin-left": "100px",
                "margin":"auto"
            
            }}>Add Entity</button>
            <div style={{
               "display":"flex", 
               "marginLeft":"400px",
               "marginBottom":"50px"
            }}>
            <input type="text" placeholder="" onChange={(e)=>(setCity(e.target.value))} style={{
                
            }}/>
            <br/>&nbsp;
            <button onClick={()=>{handlefilter(city)}}>Filter By City</button>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;
            
        
            <input type="text" placeholder=""  onChange={(e)=>(setVerify(e.target.value))}/>
            <br/>&nbsp;
            <button onClick={()=>{handlefilter(verify)}}>Filter By verified</button><br/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handlereset}>Reset</button> <br/>
            <br/>&nbsp;
            <button onClick={()=>{handlesort("cost")}}>Sort By Cost</button>
            <br/>
            <br/>
            <button onClick={()=>{handlesort("rating")}}>Sort By Rating</button>
            <br/>&nbsp;
            <br/>
            </div>
            <table style={{
                "margin":"auto",
                "width":"95%",
                "border": "1px solid black",
                "backgroundColor":"teal",
                "color" : "white"
                }}>
                <thead >
                    <tr style={{
                        "color":"red",
                        "border": "1px solid black"
                    }}>
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
                                <Link to={`/listing/${item.id}`} style={{
                                    "color" : "white"
                                }}><td>{item.name}</td></Link>
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