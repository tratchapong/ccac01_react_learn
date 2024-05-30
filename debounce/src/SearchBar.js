import React,{useEffect, useState} from 'react'

function SearchBar(props) {
  const {searchText, setSearchText} = props
  const [inputText, setInputText] = useState('')

  useEffect( ()=>{
    let timer
    console.log('useEffect start..')
    timer = setTimeout( ()=> {
      setSearchText(inputText)
    },1000)
    return () => {
      console.log('useEffect return')
      clearTimeout(timer)
    }
  }, [inputText])

  const hdlChange = e => {
    setInputText(e.target.value)
  }
  return ( 
    <div className="search-bar">
      <input type="text" value={inputText} onChange={hdlChange} />
    </div>
  )

}

export default  SearchBar