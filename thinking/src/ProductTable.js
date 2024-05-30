import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  // products.forEach((product) => {
  //   // if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
  //   //   return;
  //   // }
  //   if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
  //     return;
  //   }
  //   if (inStockOnly && !product.stocked) {
  //     return;
  //   }
  //   if (product.category !== lastCategory) {
  //     rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
  //   }
  //   rows.push(<ProductRow product={product} key={product.name} />);
  //   lastCategory = product.category;
  // });

  // let myFilter = products.filter((el) => {
  //   // console.log(inStockOnly, el.stocked);
  //   return (
  //     (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ) &&
  //     (inStockOnly && el.stocked) || 
  //     (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ) &&
  //     (!inStockOnly)
  //   );
  // });
  // console.log(myFilter);

  // let finalList = myFilter.reduce((a, c) => {
  //   if (a.lastCategory !== c.category) {
  //     a.output = [...a.output, <ProductCategoryRow category={c.category} key={c.category} /> ]
  //     a.lastCategory = c.category
  //   }
  //   a.output = [...a.output, <ProductRow product={c} key={c.name} />]
  //   return a
  // }, {lastCategory: null, output: []});

//   let finalList = products.filter((el) => (
//     (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ) &&
//     ((inStockOnly && el.stocked) || (!inStockOnly))
//   )).reduce( (a,c) => (
//     {
//       output: (a.lastCategory !== c.category) 
//             ? [...a.output,
//               <ProductCategoryRow category={c.category} key={c.category} />,
//               <ProductRow product={c} key={c.name} />
//              ]
//             : [...a.output,
//               <ProductRow product={c} key={c.name} />
//             ],
//       lastCategory: c.category
//     }
//  ),{lastCategory:null, output: []})

 let finalList = products.reduce( (a,c) => {
    if(c.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ) { return a }
    if(inStockOnly && !c.stocked) { return a }
    (a.lastCategory !== c.category) && a.output.push(<ProductCategoryRow category={c.category} key={c.category} />)
    a.output.push( <ProductRow product={c} key={c.name} />)
    a.lastCategory = c.category
    return a
 },{lastCategory:'', output: []})

// const finalList = products
// .filter((product) =>
// product.name.toLowerCase().includes(filterText.toLowerCase().trim()) &&
// (product.stocked || !inStockOnly)
// )
// .reduce((a, c) => {
//   const categoryRow = c.category !== a.lastCategory ? [<ProductCategoryRow key={c.category} category={c.category} />] : [];
//   return { lastCategory: c.category, output: [...a.output, ...categoryRow, <ProductRow key={c.name} product={c} />] };
// }, { lastCategory: null, output: [] });
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
