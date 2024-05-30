import React from 'react'

function Counter(props) {
  const {item : {id, number}, hdlUpdate, hdlDelCounter} = props

  return (
    <div className='counter'>
      <button onClick={()=>hdlUpdate(id, -1)}>-</button>
      <h3>{number}</h3>
      <button onClick={()=>hdlUpdate(id, 1)}>+</button>
      <button onClick={()=>hdlUpdate(id, -number)}>C</button>
      <button onClick={()=>hdlDelCounter(id, -number)}>X</button>
    </div>
  )
}

export default Counter