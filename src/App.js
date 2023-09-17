import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const isProductP1Route = location.pathname === "/product/p1";

  return (
    <div>
      {isProductP1Route ? (
        <div>
          <Header />
          <Outlet />
        </div>
      ) : (
        <div>
          <Header />
          <Layout />
          <Products />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;
