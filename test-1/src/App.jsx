import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `AIzaSyBF0SpE1ZaCq-t_xDrhhEB_DjxPbMVe0g8`,
        },
        body: JSON.stringify({
          prompt: text,
          n: 1,
          size: "512x512",
        }),
      });
      const data = await response.json();
      setImage(data.data[0].url);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Text-to-Image Generator</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter your text prompt here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={generateImage}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Generate Image
        </button>
      </div>

      {image && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Image:</h2>
          <img
            src={image}
            alt="Generated"
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default App;
