import {useState} from "react"

export function GroceryInput({addGrocery} ){
    const [text , setText] = useState("")
    
    return <div>
        
        <input type="text" onChange={(e)=>{
             setText(e.target.value)
        }}/>
        <button onClick={()=>{
           addGrocery(text);
        }}>Submit</button>

    </div>
}


