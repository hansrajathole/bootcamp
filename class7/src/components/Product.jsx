import React from 'react'

const Product = ({elem}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <img
      className="w-full h-64 object-contain"
      src={elem.image}
      alt={elem.title}
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{elem.title}</h2>
      <p className="text-gray-600 text-sm my-2">{elem.description.slice(0,200)+"..."}</p>
      <div className="flex justify-between items-center my-4">
        <span className="text-lg font-bold text-gray-800">${elem.price}</span>
        <span className="bg-yellow-500 text-white text-sm font-semibold px-2 py-1 rounded">
          {elem.rating.rate} ★
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Category: {elem.category}
        </span>
        <span className="text-sm text-gray-600">
          ({elem.rating.count} reviews)
        </span>
      </div>
      <button className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Add to Cart
      </button>
    </div>
  </div>
  )
}

export default Product