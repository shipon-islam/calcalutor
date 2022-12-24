import React from 'react'

function ButtonNum({handleClick,value,bg="bg-gray-500"}) {
  return (
    <button className={`${bg} py-1 px-4 rounded-md shadow-lg shadow-gray-900 text-4xl  text-white`} onClick={()=>handleClick(value)}>{value}</button>
  )
}

export default ButtonNum