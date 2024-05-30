import React, {useState} from 'react'
import './styles.css'
import Counter from './Counter'

function App() {
  const [counter, setCounter] = useState([])
  const [sum, setSum] = useState(0)

  const hdlAddCounter = () =>{
    let newId = counter.length===0 ? 1 : counter.at(-1).id+1
    setCounter([ ...counter, {id: newId, number: 0} ])
  }
  const hdlUpdate = (id, num) => {
    const cloneCounter = [...counter]
    let idx = cloneCounter.findIndex( el => el.id === id )
    if(cloneCounter[idx].number + num < 0) {
      return
    }
    cloneCounter[idx].number +=  num
    setCounter(cloneCounter)
    setSum(sum+num)
  }

  const hdlDelCounter = (id,num) => {
    console.log('Remove Counter', id)
    const cloneCounter = [...counter]
    let idx = cloneCounter.findIndex( el => el.id===id)
    cloneCounter.splice(idx,1)
    setCounter(cloneCounter)
    setSum(sum+num)
  }

  return (
    <>
      <div className='title'>
        <h1><i class="fa-regular fa-star"></i>Sum = {sum}</h1>
        <button onClick={hdlAddCounter}>Add Counter</button>
      </div>
      {counter.map( el => (
        <Counter key={el.id} item={el} hdlUpdate={hdlUpdate} hdlDelCounter={hdlDelCounter}/>
      ))}
    </>
  )
}

export default App