import React, { useState } from "react";

function App() {
  const [name, setName] = useState(""); 
  const [role, setrole] = useState("")            
  const [image, setImage] = useState("");          
  const [id, setid] = useState(""); 
  const [cards, setCards] = useState([{name: "kazi mohib ", image : "https://i.pinimg.com/736x/0f/fe/06/0ffe063ec2dcaf4145f886804e45d0d8.jpg", role : "Software Engineer" , id : 203164613653},{name : "Manish Chaudhary", image: "https://i.pinimg.com/736x/0a/7a/04/0a7a045439a12a9e50644af8d6a3e52a.jpg", role : "Web Developer", id : 12346798532199}]); 
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { name, role, image, id };
    setCards([...cards, newCard]);  
    setName("");       
    setrole("")            
    setImage("");
    setid("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6 text-black-600">
        Generate Employee Id Card
      </h1>


      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-2 focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Role :</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setrole(e.target.value)}
            placeholder="Enter name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-2 focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Image URL:
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-2 focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Imployee ID :
          </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setid(e.target.value)}
            placeholder="Enter Id number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-2 focus:border-blue-400"
            required
          ></input>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 duration-300"
        >
          Submit
        </button>
      </form>


      <div className="m-10 font-bold text-3xl flex flex-wrap justify-center gap-6">
        <h1>Employee id Cards</h1>
      </div>  
      <div className=" flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => {
         return <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-64"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Name : {card.name}</h2>
              <p className="text-gray-600 mt-2">Role : {card.role}</p>
              <p className="text-gray-600 mt-2">Id : {card.id}</p>
            </div>
          </div>
})}
      </div>
    </div>
  );
}

export default App;
