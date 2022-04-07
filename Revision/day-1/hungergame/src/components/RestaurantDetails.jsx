import React, { useEffect, useState } from 'react'
import axios from "axios"



export const RestaurantDetails=()=>{
    const [alldata, setAlldata] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState([]);

    

    useEffect(()=>{
        axios.get(`http://localhost:8080/data?_page=${page}&_limit=4`).then((res)=>{
            console.log(res.data)
            setAlldata([...res.data])
            setLoading([...res.data])
        })
    },[page])

    const handelpage=(value)=>{
        if(page+value>0 && page+value<4){
            setPage(page+value)
        }
    }

    const handlesort=(value)=>{
    let a=loading;
       let x = a.filter((ele)=>{return ele.rating>=value})
       setAlldata([...x])
       
       
    }

    const handlepay=(value)=>{
        let a=loading;
        let x = a.filter((ele)=>{return ele.payment_method[value]==true})
        setAlldata([...x])
    }

    const handleup=(value)=>{
       if(value===1){
           let data=alldata.sort((a,b)=>{
               return Number(a.cost_for_one)-Number(b.cost_for_one)
           })
           setAlldata([...data])
       }
       else{
           let data=alldata.sort((a,b)=>{
               return Number(b.cost_for_one)-Number(a.cost_for_one)
           })
           setAlldata([...data])
       }
    }

  
  return (
    <div>

        <h1>HUNGER GAMES</h1>

        <button onClick={()=>handelpage(-1)}>prev</button>
        <button onClick={()=>handelpage(1)}>next</button>
        

      <div>
          <button onClick={()=>handlesort(4)}>4 and above</button>
          <button onClick={()=>handlesort(3)}>3 and above</button>
          <button onClick={()=>handlesort(2)}>2 and above</button>
          <button onClick={()=>handlesort(1)}>1 and above</button>
          <button onClick={()=>handlesort(0)}>all</button>
      </div>
      <div>
          <button onClick={()=>handlepay("card")}>Card</button>
          <button onClick={()=>handlepay("cash")}>Cash</button>
          <button onClick={()=>handlesort(0)}>All</button>

      </div>
      <div>
          <button onClick={()=>handleup(1)}>DESC</button>
          <button onClick={()=>handleup(2)}>ASE</button>
      </div>
       

       {alldata.map((e)=>{

     return (<div key={e.id} style={{border:"1px solid black",display:"flex"}}>


         <div className='res_img' style={{border:"1px solid black", width:"300px", height:"250px"}}>
             <img src={e.img} alt="" style={{width:"100%", height:"100%"}} />
         </div>
         <div className='res-details' style={{border:"1px solid black", width:"800px", height:"250px"}}>
             <h3>{e.name}</h3>
             {e.category.map((el)=>{
                 return(
                     <span key={el.id}>{el}, </span> 
                 )
             })}
             <p>cost for one ₹ {e.cost_for_one}</p>
             <span>min ₹ 50  upto 30 min</span><br />
             <span>Accept:{e.payment_method.cash ?"cash": ""},
             {e.payment_method.card ?"card": ""},
              {e.payment_method.upi ?"upi": ""}</span> 

               
         </div>
         <div style={{width:"400px", border:"1px solid teal"}}>
             <h3>{e.rating}</h3>
             <span>Votes: {e.votes}</span><br />
             <span>Reviews: {e.review}</span>
         </div>
     </div>)
       })}

   

    </div>
  )

}