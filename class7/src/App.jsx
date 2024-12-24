import React, { useState } from 'react'
import Product from './components/Product'
import Card from './components/Card'
import axios from 'axios';

const App = () => {

  const [allProduct, setallProduct] = useState([])


  async function getData(){
    let response  = await axios.get('https://fakestoreapi.com/products')
    setallProduct(response.data)
    console.log(allProduct);
    
  }


  return (
    <div className='h-auto w-full p-5 bg-slate-200'>
      <button
        onClick={()=>getData()}
      className='bg-black text-white  p-2 rounded-md text-2xl'>Get data</button>
      <div className='flex '>
      <div className='h-full w-[70%] flex flex-wrap gap-3'>
        {allProduct.map((elem,index)=>{
          return <Product elem={elem}/>
        })

        }
      </div>
        <Card/>
      </div>
    </div>
  )
}

export default App