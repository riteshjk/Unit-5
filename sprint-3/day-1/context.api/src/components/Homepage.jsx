import {useContext} from "react"
 import {AuthContext} from '../contexts/AuthContext'
export function Homepage (){
    const {token}= useContext(AuthContext)
    console.log("hompage",token)
    const x=token
    return (
        <div style={{
            Color: "white"
        }}>Welcome :{x}</div>
    )
}