import { useEffect, useState } from "react";


export function Stopwatch({start,end}){

    const [Count, setCount] = useState(start);

  useEffect(()=>{
    const id = setInterval(()=>{
        setCount((prev)=>{
            if(prev>=end-1){
                clearInterval(id)
            }
            return prev+1
        }
        )
    },1000)

    return ()=>{ clearInterval(id)}


  },[])

    return (
        <div><h1>Timer : {Count}</h1></div>
    )
}