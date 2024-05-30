
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)

function Counter(props) {
  // let countNum = 0
  const [countNum, setCountNum] = React.useState(0)

  const hdlUpdate = (num) => {
    if(countNum+num < 0 ) {
      return
    }
    setCountNum(countNum+num)
  }
  return (
    <div className='counter'>
      <p>{props.id}</p>
      <button onClick={()=>hdlUpdate(-1)}>-</button>
      <h3>{countNum}</h3>
      <button onClick={()=>hdlUpdate(1)}>+</button>
      <button onClick={()=>hdlUpdate(-countNum)}>C</button>
    </div>
  )
}

function App() {
  // const [counters, setCounters] = React.useState([])
  const [amount, setAmount] = React.useState(0)
  let allCounter = Array(amount).fill(  <Counter key={amount} id={amount}/>  )
  const hdlAddCounter = () =>{
    setAmount(amount+1)
  }
  return (
    <React.Fragment>
      <div className='title'>
        <h1>Codecamp Academy 01</h1>
        <button onClick={hdlAddCounter}>Add Counter</button>
      </div>
      {allCounter}
    </React.Fragment>
  )
}



// console.log(React.version)
// console.log(ReactDOM)


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<MyApp />);