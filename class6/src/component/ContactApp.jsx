import React, { useState } from "react";
import Card from "./Card";

const ContactFormApp = () => {
  // State for form data and contacts list
  const [name, setname] = useState("")
  const [company, setcompany] = useState("")
  const [phone, setphone] = useState("")
  const [favorite, setfavorite] = useState("")

  const [contacts, setContacts] = useState([
    { name: "Sarthak Sharma", company: "Sheryians", phone: "07024326334", favorite: true },
    { name: "Harsh Sharma", company: "Sheryians Pvt. Lmt.", phone: "07024326334", favorite: false },
    { name: "Sarthak Sharma", company: "N/A", phone: "07024326334", favorite: false },
  ]);


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
        let newData = {name,company,phone,favorite}
        setContacts([...contacts,newData])
     
        setname("")
        setcompany("")
        setphone("")
        setfavorite(false)  
      
  };

  // Handle delete contact
  const handleDelete = (index) => {
    let dataCopy = [...contacts]
    dataCopy.splice(index,1)
    setContacts(dataCopy)
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 p-8">
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-xl font-bold mb-4">Add Contact</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter name"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Company Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setcompany(e.target.value)}
            placeholder="Enter company"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            required
            onChange={(e) => setphone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Favorite Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="favorite"
            onChange={(e) => setfavorite(e.target.value)}
            className="mr-2 w-5 h-5"
          />
          <label className="text-gray-700">Favorite</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Contact
        </button>
      </form>

      {/* Contact List */}
      <div className="w-2/3 ml-8">
        <h2 className="text-xl font-bold mb-4">Contact List</h2>
        {contacts.map((elem,index)=>{
            return <Card elem={elem} index={index} handleDelete={handleDelete}/>
        })

        }
      </div>
    </div>
  );
};

export default ContactFormApp;
