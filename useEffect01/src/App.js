import React, { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <h1>Hello React, Codecamp Academy 01</h1>
      <button onClick={()=>setOpen(!open)}>{ open ? 'Close' : 'Open'} Search Bar</button>
      {open && <SearchBar />}

    </>
  )
};

export default App;
