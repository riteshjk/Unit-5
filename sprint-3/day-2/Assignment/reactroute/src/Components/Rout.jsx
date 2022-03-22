import { Navbar } from "./Navbar";
import {Link} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";

export const Rout = () => {
  return (
    <>
    
      <Navbar />
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/products" element={<ProductsPage/>}/>
       <Route path="/products/:id" element={<ProductsDetailsPage/>}/>



     </Routes>
    </>
  );
};
