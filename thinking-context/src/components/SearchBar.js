import React, { useContext } from "react";
import { ProductContext } from "../contexts/productContext";

export default function SearchBar() {
  const {
    filterText,
    inStockOnly,
    setFilterText,
    setInStockOnly
  } = useContext(ProductContext)

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => setFilterText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}