import React from 'react'

const Button = ({chacha,color}) => {
  return (
        <button className={`p-2 rounded-md text-lg ${color} font-semibold px-4 w-[50%] `}> {chacha}</button>
  )
}

export default Button