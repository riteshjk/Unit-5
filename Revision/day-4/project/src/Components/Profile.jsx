import styled from "styled-components";
import { useState,useEffect } from "react";


const Container = styled.div`
padding:25px;
`


export const Profile=({token,username})=>{

    const [todo,setTodo]= useState('');

   useEffect(()=>{
       fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
              method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${token}`
                }
           
       })
       .then((res)=>res.json())
       .then((res)=>setTodo(res))
       .catch((err)=>console.log(err))
   },[])

    return(
        <Container>
            <h1>Profile</h1>
            <p>Name:{todo.name}</p>
            <p>Email:{todo.email}</p>
            <p>Mobile:{todo.mobile}</p>
            <p>Description:{todo.description}</p>
            <hr/>
        </Container>
    )
}