import React, { useContext } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { ProductContext } from "../contexts/productContext";

export default function ProductTable() {
  const { products, filterText, inStockOnly } = useContext(ProductContext)

  let finalList = products.filter((el) => (
      (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ) &&
      ((inStockOnly && el.stocked) || (!inStockOnly))
    )).reduce((a, c) => {
    if (a.lastCategory !== c.category) {
      a.output = [...a.output, <ProductCategoryRow category={c.category} key={c.category} /> ]
      a.lastCategory = c.category
    }
    a.output = [...a.output, <ProductRow product={c} key={c.name} />]
    return a
  }, {lastCategory: null, output: []});

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{finalList.output}</tbody>
    </table>
  );
}
