import React, { useEffect } from 'react'

function SearchBar() {
  const docClick = ()=> alert(999)
  useEffect( ()=>{
    console.log('SearchBar : useEffect start')
    document.addEventListener('contextmenu', docClick)
  
    return ()=>{
      console.log('SearchBar : useEffect return')
      document.removeEventListener('contextmenu', docClick)
    }
  },[])
  console.log('SearchBar : main function run')
  return (
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  )
}

export default SearchBar 