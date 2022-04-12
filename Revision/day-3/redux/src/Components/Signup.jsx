import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signupSuccess,signupFailure } from "../Redux/SignUp/action";

export const Signup=()=>{

    const [username,setUsername]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const dispatch = useDispatch();
    

    const handlechange=()=>{
        axios.post("https://authmyapp.herokuapp.com/register")
    }

    return (
        <div>
            <label>Username</label><br/>
            <input type="text" placeholder="enter your username" value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }}/><br/>

            <label>Email</label><br/>
            <input type="text" placeholder="enter your username" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/><br/>

             <label>Password</label><br/>
             <input type="text" placeholder="enter your password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/><br/>
            <button onClick={handlechange}>Signup</button><br/>
           
        </div>
    )
}