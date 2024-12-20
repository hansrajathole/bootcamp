import React from 'react'

const Card = ({elem,index,handleDelete}) => {
  return (
            <div
              key={index}
              className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{elem.name}</h3>
                <p className="text-gray-600">Company: {elem.company || "N/A"}</p>
                <p className="text-gray-600">Phone: {elem.phone}</p>
                
                {elem.favorite ? (
                  <span className="bg-yellow-400 text-white px-2 py-1 rounded text-sm font-medium mt-2 inline-block">
                    Favorite
                  </span>
                ):(
                    <span></span>
                )}

              </div>
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )
}

export default Card