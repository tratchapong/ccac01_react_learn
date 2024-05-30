import { SumInfo } from "./main.js"
import { makeElement } from "./utils.js"

export default function Counter(props) {
  const {total} = props
  let countNum = 0
  
  const updateCounter = (n) => {
    if(countNum + n < 0) {
      return
    }
    countNum += n
    props.total += n
    number.textContent = countNum
    SumInfo.textContent = `Sum = ${props.total}`
  }

  const delCounter = (e) => {
    updateCounter(-countNum)
    // counter.remove()
    e.target.closest('.counter').remove()
  }

const counter = makeElement('div', 'class', 'counter', '')
const btnInc = makeElement('button', 'class', 'btn-inc', '+')
const number = makeElement('h3', 'class', 'number', '0')
const btnDec = makeElement('button', 'class', 'btn-dec', '-')
const btnClr = makeElement('button', 'class', 'btn-clr', '0')
const btnDel = makeElement('button', 'class', 'btn-del', 'X')

btnInc.addEventListener('click', () => updateCounter(1) )
btnDec.addEventListener('click', () => updateCounter(-1))
btnClr.addEventListener('click', () => updateCounter(-countNum))
btnDel.addEventListener('click', delCounter)

// counter.append(btnInc, number,btnDec, btnClr, btnDel)
counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)
counter.append(btnDel)

return counter
}