import React,{useContext, useEffect, useState} from 'react'
import ProductContext from '../contexts/ProductContext'

export default function ProductList() {
  const { data, searchText } = useContext(ProductContext)


  return (
    <div className="product-list">
      <ul>
        { data.products?.map( el => (
          <li key={el.id}> {el.title}, {el.price}</li>
        )) }
      </ul>
    </div>
  )
}