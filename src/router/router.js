import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import ProductList from "../components/ProductList";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
          <Route path="/product" element="" >
            <Route path="/product/p1" element={<ProductList/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
