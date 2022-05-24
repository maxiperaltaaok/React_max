import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Products from "./views/Products/Products";
import Category from "./views/Category/Category";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/products/:id" element={<Products/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/Category/:id" element={<Category/>}/>
    </Routes>
    </BrowserRouter> 
  )
  }
export default App;


