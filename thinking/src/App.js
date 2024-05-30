import React from "react";
import FilterableProductTable from "./FilterableProductTable";
import PRODUCTS from "./data";


export default function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
      <hr />

    </>
  );
}
