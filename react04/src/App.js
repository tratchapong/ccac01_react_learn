import React,{useState} from "react";
function App() {
  const [status, setStatus] = useState(false)
  return (
    <>
      <button onClick={()=>setStatus(!status)}>switch</button>
      <h1 className={status && 'go'}>{status ? 'Go' : 'Stop'}</h1>;
    </>
  )
};

export default App;
