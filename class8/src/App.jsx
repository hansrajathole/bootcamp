import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const oggy = useRef(null)

  const [xvalue, setxvalue] = useState(0)
  const [yvalue, setyvalue] = useState(0) 
  const [rotate, setrotate] = useState(0) 

  useEffect(() => {
      oggy.current.style.left = xvalue+"%"
      oggy.current.style.top = yvalue+"%"
      oggy.current.style.rotate = rotate+"deg"
      // console.log(xvalue);
      

  }, [xvalue,yvalue,rotate])
  

  return (
    <div>
      <img ref={oggy} src="https://i.pinimg.com/474x/49/4d/2e/494d2e25fad7412b4f11beb7242ba804.jpg" alt="" />
      <button onClick={()=>{
        setyvalue(Math.random()*90)
        setxvalue(Math.random()*90)
        setrotate(Math.random()*360)
      }
      }>Click</button>
    </div>
  )
}

export default App