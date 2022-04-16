import {delete_country,delete_city} from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";


export const Table=({tabledata})=>{
    const dispatch = useDispatch();

    const handledelete=(id)=>{
        dispatch(delete_country(id));
    }

    


    return(
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>
                    <th>Edit</th>
                    <th>Delete</th>


                </thead>
                <tbody>
                    {tabledata.map((e,i)=>{
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{e.country_name}</td>
                                <td>{e.city_name}</td>
                                <td>{e.population}</td>
                                <td><button>Edit</button></td>
                                <td onClick={()=>handledelete(e.id)}><button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}