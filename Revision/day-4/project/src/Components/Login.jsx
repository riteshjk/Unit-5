import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../Redux/Login/action";





export const Login=()=>{
    const [username , setUsername] = useState('');
    const [password,setPassword]=useState('');

    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((store) => store.login);
     
    const handleLogin=()=>{
        const payload={
            username,
            password
       
        }  
        dispatch(login(payload))
    }
    if(isAuthenticated){
        return <Navigate to="/"/>
    }
    

    return(
        <div>
           <input type="text" placeholder=" Enter username" value={username} onChange={(e)=>{
               setUsername(e.target.value)
           }}/><br/>
             <input type="text" placeholder=" Enter password" value={password} onChange={(e)=>{
               setPassword(e.target.value)
           }}/><br/>
             <button onClick={handleLogin}>Login</button>
        </div>
    )
}