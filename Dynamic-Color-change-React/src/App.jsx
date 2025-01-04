import React, { useRef } from 'react'

const App = () => {


  const body = useRef(document.body)
  const color = useRef(null)

  //onclick function 
  const clickHandler = ()=>{
      color.current.click()
  }

  //onchange function 
  const colorchange=(e)=>{
    body.current.style.backgroundColor = e.target.value;
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div  
      onClick={clickHandler}
      className=' h-[200px] w-[200px] bg-teal-600 rounded-full'>
        <input  type="color"
        hidden
        ref={color}
        onChange={colorchange}
        />
      </div>
    </div>
  )
}

export default App
