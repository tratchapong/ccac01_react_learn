import Counter from './Counter.js'
import { makeElement } from './utils.js'
const root = document.querySelector('#root')
// const btnAdd = document.querySelector('.btn-add')
// const sumInfo = document.querySelector('.show-sum')

{/* <h1 class="show-sum">Sum = 0 </h1>
<button class="btn-add">Add Counter</button> */}
const props = {total : 0}
export const total = {value : 0}
export const SumInfo = makeElement('h1', 'class', 'show-sum','Sum = 0')
// export const getTotal = ()=>total
// export const setTotal = (n)=> total=n 
const btnAdd = makeElement('button', 'class', 'btn-add', 'Add Counter')

const hdlAddCounter = () => {
  console.log(total)
  root.append(Counter(props))
}

btnAdd.addEventListener('click', hdlAddCounter)

root.before(SumInfo)
root.before(btnAdd)

