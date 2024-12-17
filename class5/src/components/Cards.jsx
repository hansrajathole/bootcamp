import React from 'react'

const Cards = ({item,index,deleteHandler}) => {
  // console.log(index);
  return (
        <div key={index} className='h-[350px] w-[250px] p-2 border-2 border-gray-600 rounded-md flex flex-col items-center'>
            <div className='h-[60%] rounded-md overflow-hidden'>
            <img className='h-[180px] w-[180px] object-cover object-top rounded-full mx-auto'  src={item.image} alt="" />
            </div>
            <div className='p-2 text-xl '>
                <h1>{item.name}</h1>
                <h1>{item.position}</h1>
                <h1>{item.id}</h1>
            </div>
           <div className=''>
             <button onClick={()=>{
               deleteHandler(index)
             
             }} className='mx-auto bg-red-600 p-2 rounded-lg '>delete</button>
           </div>
          </div>
  )
}

export default Cards