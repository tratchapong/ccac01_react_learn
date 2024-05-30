import React,{ useContext, useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { ProductContext } from "../contexts/productContext";

export default function FilterableProductTable() {
  const {products} = useContext(ProductContext)

  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}