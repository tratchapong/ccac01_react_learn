import React from 'react'

export default function Counter({item : {id, number}, hdlUpdate, hdlDelCounter} ) {
  return (
   <div className='counter'>
      <button onClick = {()=>hdlUpdate(id,-1)}> - </button>
      <h3>{number}</h3>
      <button onClick = {()=>hdlUpdate(id,1)}> + </button>
      <button onClick = {()=>hdlUpdate(id,-number)}> C </button>
      <button onClick = {()=>hdlDelCounter(id)}> X </button>
   </div>
  )
}

