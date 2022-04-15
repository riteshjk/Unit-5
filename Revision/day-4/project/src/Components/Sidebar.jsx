import { Profile } from "./Profile";
import { TagStack } from "./TagStack";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Login/action";



export const Sidebar=({token,username,todos})=>{

    const dispatch = useDispatch();
    return(
        <div>
           <Profile token={token} username={username} />
           <TagStack todos={todos}/>
           <hr/>
           <div>
               <button onClick={()=>dispatch(logout())}>LOGOUT</button>
           </div>
        </div>
       
    )
}