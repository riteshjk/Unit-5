import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [products, setproducts] = useState([])

  function getdata(){
    axios.get("http://localhost:3001/products").then((res)=>{
      console.log(res.data)
      setproducts([... res.data])
    })
  }
useEffect(()=>{
  getdata()
},[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {products.map((el) => {
          return <Link to={`/products/${el.id}`}  key={el.id}> <h3>{el.name}</h3>
          <h4>Price: {el.price}</h4></Link>
        })}
        </div>
    </>
  );
};
