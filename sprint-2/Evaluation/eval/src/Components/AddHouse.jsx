import {useState, useEffect} from "react";
const axios = require("axios")
//  import { Rentals } from "./Rentals";

export const AddHouse = () => {
    const [formdata, setFormdata] = useState([])
    const [data ,setData]= useState({
        name:"",
        ownerName:"",
        address:"",
        areaCode:"",
        rent:"",
      
    })
    useEffect(()=>{
        get();
    },[])

    function get(){
        axios.get("http://localhost:8080/houses").then(function(response){
            console.log(response.formdata)
            setFormdata(response.formdata);
            console.log(formdata)
        })
    }


    function handlechage(e){
        const{className, value, type ,checked} = e.target;
        if(type=="checkbox" && className=="bachelor"){
            if(checked){
                data.status="bachelor"
            }
        }
        else{
            if(checked){
                data.status="married"
            }
        }
        setData({
            ...data,
            [className]:value,
            
        })
        console.log(data)
    }
    function handlesubmit(e){
        e.preventDefault();
       // console.log(data);
       axios.post("http://localhost:8080/houses",data).then(function(){
           alert("success")
           
       })
       get()
    }
    return (
      <div className="addHouseContainer">
        <form onSubmit={handlesubmit}>
          <label>name</label>
          <input type="text" className="name" onChange={handlechage} required />
          <br />
          <label>ownerName</label>
          <input  type="text" className="ownerName" onChange={handlechage} required />
          <br />
          <label>address</label>
          <input  type="text" className="address" onChange={handlechage} required />
          <br />
          <label>areaCode</label>
          <input type="text" className="areaCode" onChange={handlechage} required />
          <br />
          <label>rent</label>
          <input type="text" className="rent" onChange={handlechage} required />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input  type="checkbox" className="bachelor" onChange={handlechage} />
          <br />
          <label>married</label>
          <input  type="checkbox" className="married" onChange={handlechage} />
          <br />
          <label>image</label>
          <input  type="text" className="image"/>
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };