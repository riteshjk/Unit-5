import {GroceryInput} from "./GroceryInput"
import {useState,useEffect} from "react"
import {GroceryList} from "./GroceryList"
import { nanoid } from 'nanoid'
const axios = require('axios');



export function Grocery(){
    const [gros ,setGros ] = useState([])
    const [page , setPage] = useState(1)
    
    const addGrocery =(data)=>{
        console.log(data)
        const payload = {id:nanoid(), title:data}
        setGros([...gros,payload])
        console.log(data)


        axios.post("http://localhost:3001/grocery",payload).then(function(response){
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
          })


    }

    useEffect(()=>{
       showData();
    },[page])

    function showData(){
        axios.get(`http://localhost:3001/grocery?_limit=3&_page=${page}`).then(function(response){
            //console.log(response.data)
            setGros(response.data)
        })
        .catch(function (error) {
            console.log(error);
          })
    }

    const deleteGrocery=(id)=>{
         const x=gros.filter((e)=>{
             return e.id!==id
         })
         setGros(x)
    }
    console.log(gros)
    return (<div>
        <GroceryInput addGrocery ={addGrocery}/>
        {gros.map((e)=>{
           return <GroceryList value ={e} deleteGrocery={deleteGrocery}/>
        })}
        <button onClick={()=>setPage(page+1)}>Next</button>
        <button onClick={()=>setPage(page-1)}>Prev</button>

    </div>
    );
}

