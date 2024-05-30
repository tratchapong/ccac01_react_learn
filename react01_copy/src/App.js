import React, {useState} from 'react'
import Counter from './Counter'
import SumInfo from './SumInfo'

export default function App() {
  const [counters, setCounters] = React.useState([ {id: 1, number: 0} ])
  const total = counters.reduce( (a,c) => a+c.number, 0)

  const hdlUpdate = (id, num) => {
    const cloneCounters = counters.map( el=> ( 
      {...el, number: (el.id===id && el.number+num >= 0 )? el.number += num : el.number }
    ) )
    setCounters(cloneCounters)
  }


  const hdlAddCounter = ()=>{
    let newId = counters.length===0 ? 1 : counters.at(-1).id +1 
    const  cloneCounters = [...counters]
    cloneCounters.push( {id: newId, number: 0} )
    setCounters(cloneCounters)
  }

  const hdlDelCounter = (id) => {
    setCounters(prv => prv.filter(el=> el.id !== id))
  }

  return (
  <>
    <h1 className='text-center'>Codecamp Academy 01</h1>
    <button className='text-center' onClick={hdlAddCounter}>Add Counter</button>
    <SumInfo color="red" size="big" total={total} /> 

    {counters.map( el => {
      return <Counter key={el.id} item={el} hdlUpdate={hdlUpdate} hdlDelCounter={hdlDelCounter}/> 
    } )}

  </>
  )
}