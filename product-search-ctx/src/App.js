import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

function App() {
  
  return (
    <>
      <h1>Search Products</h1>
      <SearchBar />
      <ProductList />
    </>
  )
};

export default App;
