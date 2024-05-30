import React from 'react'

export default function SumInfo(props)  {
  const stTitle = {
    color : props.color,
    fontSize : props.size==='big' ? '50px' : '40px'
  }
  return (
    <div className='suminfo'>
      <h1 style={stTitle}>Sum = {props.total}</h1>
    </div>
  )
}

