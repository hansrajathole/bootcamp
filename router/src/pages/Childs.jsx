import React from 'react'
import { useParams } from 'react-router-dom'

const Childs = () => {

    let data = useParams()

  return (
    <div>{data.child}'s Childs</div>
  )
}

export default Childs