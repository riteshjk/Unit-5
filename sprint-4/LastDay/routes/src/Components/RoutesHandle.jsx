import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import {HomePage} from "./HomePage"
import {ProductsPage} from "./ProductsPage"
import {ProductsDetailsPage} from "./ProductsDetailsPage"
import{NotFoundPage} from "./NotFoundPage"
export const RoutesHandle = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/products" element={<ProductsPage/>}></Route>
          <Route path="/products/:id" element={<ProductsDetailsPage/>}></Route>
          <Route path="*" exact={true} element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  );
};
