import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Products from "./views/Products/Products";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="products" element={<Products/>}/>
    <Route exact path="cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter> 
  )
  }
export default App;


