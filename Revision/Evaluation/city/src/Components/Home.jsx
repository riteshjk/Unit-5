import { Table } from './Table';
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const Home=()=>{
const navigate = useNavigate();

    const handlechnage=(path)=>{
        navigate(path);
    }

    const tabledata = useSelector((state)=>state.add.cities)
    useEffect(()=>{

        console.log(tabledata)
    },[])
    return(
        <div>
            <button onClick={()=>handlechnage('/add-city')}>ADD CITY</button>
            <button onClick={()=>handlechnage('/add-country')}>ADD COUNTRY</button>
            <Table tabledata={tabledata}/>
            
        </div>
    )
}