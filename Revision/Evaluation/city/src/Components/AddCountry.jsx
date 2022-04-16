import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addcountry } from "../Redux/action";
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
export const AddCountry=()=>{
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handlecountry=()=>{
        dispatch(addcountry({country_name:country,id:uuidv4()}));
        navigate('/');

    }




    return (
        <div>
            <input type="text" placeholder="Country Name" value={country} onChange={(e)=>{
                setCountry(e.target.value)
            }}/>
            <button onClick={handlecountry}>Add Country</button>
        </div>
    )
}