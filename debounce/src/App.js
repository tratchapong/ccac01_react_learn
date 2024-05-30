import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar'
import ProductList from './ProductList';

export default function App() {
  const [searchText, setSearchText] = useState('')

  useEffect( ()=>{
    console.log('searchText :', searchText)
  }, [searchText] )

  return (
    <div className='App'>
      <h1>Product Search</h1>
      <SearchBar setSearchText={setSearchText} searchText={searchText}/>
      <ProductList searchText={searchText} />
    </div>
  );
}
