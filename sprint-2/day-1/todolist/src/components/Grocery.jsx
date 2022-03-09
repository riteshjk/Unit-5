import {GroceryInput} from "./GroceryInput"
import {useState} from "react"
import {GroceryList} from "./GroceryList"
import { nanoid } from 'nanoid'



export function Grocery(){
    const [gros ,setGros ] = useState([])
    
    const addGrocery =(data)=>{
        console.log(data)
        const payload = {id:nanoid(), title:data}
        setGros([...gros,payload])
        console.log(data)
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
    </div>
    );
}

