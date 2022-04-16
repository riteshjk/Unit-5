import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addcity } from "../Redux/action";



export const AddCity=()=>{

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [population, setpopulation] = useState('');
    const tabledata = useSelector((state)=>state.add.cities)


    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handlecity=()=>{
        const newdata=tabledata.map((el)=>(el.country_name===country)?{...el,city_name:city,population:population}:el)
        console.log(newdata)

        dispatch(addcity(newdata));

        navigate('/');

    }
    return (

       <div>
           <input type="text" placeholder="Add a city" value={city} onChange={(e)=>{
               setCity(e.target.value)
           }} />
           <input type="text" placeholder="Add a country" value={country} onChange={(e)=>{
               setCountry(e.target.value)}}/>
           <input type="text" placeholder="Add a population" value={population} onChange={(e)=>{
            setpopulation(e.target.value)}}/>
            <button onClick={handlecity}>Add City</button>
       </div>
    )
}