import {useState, useEffect} from "react"
import {Show} from "./Show"
const axios =require("axios")

export function Form(){
  const [data, setData]= useState([])
    const [formdata, setFormdata]= useState({
        username:"",
        age:"",
        address:"",
        dept:"",
        salary:"",
        
    })
    useEffect(()=>{
      get()
    },[])
    function get(){
        axios.get("http://localhost:3001/users").then(function(response){
            console.log(response.data)
           setData( response.data)
           console.log("data",data)
        })
        
    }
    function handlechange (e){
        const {id, value} = e.target
        //console.log(e.target.id=="ism"?"yes":"no")
         if(e.target.type=="checkbox"){  
            setFormdata(formdata.ismarried=false)
        
           if( e.target.checked ){
            setFormdata(formdata.ismarried=true)
           }
            
         }
         setFormdata({
            ...formdata,
            [id]:value, 
        })


    }
    function handlesubmit(e){
        e.preventDefault();
       // console.log(formdata)
        axios.post("http://localhost:3001/users", formdata).then(function(){
            alert("useradded succesfully")
            console.log(formdata)
           
        })
        get()
    }
    return (
        <div>
            <h1>Employees registration</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" id="username" placeholder=" Entre your Username" onChange={handlechange}/>
                <input type="number" id="age" placeholder="Entre Your age" onChange={handlechange}/>
                <input type="text" id="address" placeholder="Entre of your address" onChange={handlechange}/>
                 <select  id="dept" onChange={handlechange}>
                     <option >....</option>
                     <option value="aero">Aeronautical</option>
                     <option value="mech">Mechanical</option>
                     <option value="civil">Civil</option>
                     <option value="comp">Computers</option>
                 </select>
                 Marrid: <input type="checkbox"  onChange={handlechange}/>
                <input type="number" id="salary" placeholder="Entre Your salary" onChange={handlechange}/>
                <input type="submit" />
                
            </form>
            <h1>Employees Details</h1>
            <div className="App">
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Marrid</th>
                    </tr>
                </thead>
                <tbody>
                    
                {data.map((e)=>{return <Show key={e.id} da={e}/>})}
                </tbody>
            </table>
            </div>
            
          
        </div>
    )
}