import React, { createContext, useContext, useState } from "react";
import products from "../data/data";

const ProductContext = createContext();

function ProductContextProvider(props) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <ProductContext.Provider
      value={{ products, filterText, setFilterText, inStockOnly, setInStockOnly }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
export default ProductContextProvider;
