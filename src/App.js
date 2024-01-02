import React from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Component/Home/Home";
import ProductAll from "./Component/ProductAll/ProductAll";
import path from "./Component/Ultis/Path";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Cart from "./Component/Cart/Cart";
import CheckOut from "./Component/CheckOut/CheckOut";
import Layout from "./Layout";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.Login} element={<Login />} />
        <Route path={path.Products} element={<Layout />}>
          <Route path={path.Products} element={<Home />} />
          <Route path={path.ProductAll} element={<ProductAll />} />
          <Route path={path.ProductDetails} element={<ProductDetails />} />
          <Route path={path.Cart} element={<Cart />} />
          <Route path={path.CheckOut} element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
