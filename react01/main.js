
// const container = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

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

function App() {
  const [counter, setCounter] = React.useState([])
  const [sum, setSum] = React.useState(0)

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
    <React.Fragment>
      <div className='title'>
        <h1>Sum = {sum}</h1>
        <button onClick={hdlAddCounter}>Add Counter</button>
      </div>
      {counter.map( el => (
        <Counter key={el.id} item={el} hdlUpdate={hdlUpdate} hdlDelCounter={hdlDelCounter}/>
      ))}
    </React.Fragment>
  )
}



// console.log(React.version)
// console.log(ReactDOM)


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<MyApp />);