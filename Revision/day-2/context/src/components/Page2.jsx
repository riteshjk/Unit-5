import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"



export const Page2=()=>{
    const {name,age,date_of_birth,state_of_Residence,address,pin_code,dispatch}=useContext(FormContext);
    const navigate = useNavigate()

    if(name.length === 0 || age.length === 0 || date_of_birth.length === 0 ){
        alert ("please fill the first form")
        navigate("/registration/one")
    }
    const disable = state_of_Residence.length === 0 || address.length === 0 || pin_code.length === 0;

    const handlesubmit=()=>{
        axios.post("http://localhost:8080/users",{
            name,
            age,
            date_of_birth,
            state_of_Residence,
            address,
            pin_code
        }).then((res)=>{
            console.log(res)
        }).
        catch((err)=>{
            console.log(err)
        })
        navigate("/registration/three")
    }

    
    return (
        <div>
            <form>
                <label>State of Residence:</label>
                <input type="text" value={state_of_Residence} onChange={(e)=>dispatch({type:"UPDATE_STATE",payload:e.target.value})} required />
                <label>Address:</label>
                <input type="text" value={address} onChange={(e)=>dispatch({type:"UPDATE_ADDRESS",payload:e.target.value})} required />
                <label>Pin Code:</label>
                <input type="text" value={pin_code} onChange={(e)=>dispatch({type:"UPDATE_PIN",payload:e.target.value})} required />
                <button onClick={handlesubmit} disabled={disable}  type="submit">Next</button>
            </form>
        </div>
    )
}