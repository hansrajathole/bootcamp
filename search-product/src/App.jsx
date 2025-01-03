import React, { useState } from 'react'

const App = () => {
  let products = [
    {
        imageSrc: "https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Wireless Headphones",
        price: 2999,
        description: "Noise-cancelling wireless headphones with superior sound quality."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1565536421961-1f165e0c981e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Smartphone",
        price: 15999,
        description: "Feature-packed smartphone with a 6.5-inch display and long battery life."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1617887640375-f80bfeaa8702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Smartwatch",
        price: 4999,
        description: "Stylish smartwatch with fitness tracking and notifications."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Laptop",
        price: 59999,
        description: "Powerful laptop with 16GB RAM and a high-resolution display."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1567593179124-7835e19fe1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Bluetooth Speaker",
        price: 1999,
        description: "Portable Bluetooth speaker with excellent sound clarity."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1580234797602-22c37b2a6230?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Gaming Console",
        price: 39999,
        description: "Next-gen gaming console with ultra-fast processing and 4K graphics."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "4K TV",
        price: 45999,
        description: "Smart 4K TV with HDR support and streaming apps."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Wireless Mouse",
        price: 999,
        description: "Ergonomic wireless mouse with customizable buttons."
    },
    {
        imageSrc: "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mechanical Keyboard",
        price: 2499,
        description: "Durable mechanical keyboard with RGB lighting."
    },
    {
        imageSrc: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Drone",
        price: 15999,
        description: "High-performance drone with a built-in camera for aerial photography."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Fitness Band",
        price: 1999,
        description: "Affordable fitness band with step tracking and heart rate monitoring."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Tablet",
        price: 24999,
        description: "Lightweight tablet with a vivid 10.5-inch display."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1590292339438-5fc3be7fca9d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Digital Camera",
        price: 34999,
        description: "Compact digital camera with high-resolution imaging."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Gaming Chair",
        price: 11999,
        description: "Comfortable gaming chair with ergonomic design and lumbar support."
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Smart Home Hub",
        price: 4999,
        description: "Voice-controlled smart home hub for managing connected devices."
    }
];
  const [searchelem, setsearchelem] = useState('')

   products = products.filter((elem)=>
     elem.name.toLowerCase().includes(searchelem.toLowerCase())
  ) 
  
  return (
    <div className='h-screen w-full bg-gray-500  p-10 '>
      <div>
        <input 
        value={searchelem}
        onChange={(e)=>setsearchelem(e.target.value)}
        placeholder='search'
        className='p-2 rounded-md placeholder:text-yellow-700'
        type="text" />
        
      </div>
      <div>
        {products.map((elem,key)=>{
          return (<div key={key}>
            <h1>{elem.name}</h1>
            <h1>{elem.price}</h1>
          </div>)
        })}
      </div>
    </div>
  )
}

export default App
