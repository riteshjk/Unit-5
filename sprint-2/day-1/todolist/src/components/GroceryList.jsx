export function GroceryList({value, deleteGrocery}){
    
    return <div>
        {value.title}
        <button onClick={()=>{
         deleteGrocery(value.id)
        }}>Delete</button>
    </div>
}

