import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Private from "./pages/Private";
import Products from "./pages/Products";
import Product from "./pages/Product";

function AppRouter() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={ <Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="private" element={isLogin 
              ? <Private /> 
              : <Navigate to='/' /> } 
          />
          <Route path="product/:id" element={<Product/>} />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
