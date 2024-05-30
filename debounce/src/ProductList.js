import React,{useState, useEffect} from 'react'

function ProductList(props) {
  const {searchText} = props
  const [data, setData] = useState({})

  useEffect( ()=>{
    fetch(`https://dummyjson.com/products/search?q=${searchText}`)
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [searchText] )

  return (
    <div className='productlist'>
      <ul>
        {data?.products?.map(el=> (
          <li key={el.id}>{el.title} | {el.category} | ${el.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList