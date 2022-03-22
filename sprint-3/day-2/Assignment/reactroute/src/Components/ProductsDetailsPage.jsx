import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import axios from "axios"


export const ProductsDetailsPage = () => {
  const {id} = useParams();
  const [product , setProduct] = useState({});
  console.log(id)
  
  
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((response)=>{
      console.log(response.data);
      setProduct(response.data)
    })
  },[])
  
  
  //let product={name:"gas" , price:"20"}
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={""} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {product.specification}
          </div>
        </div>
      </div>
    </>
  );
};
