import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-700 py-10 px-6 overflow-hidden">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-wide">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-600">
          Upload your image and let AI enhance it in seconds!
        </p>
      </div>
      <Home />
      <div className="text-md mt-8 text-gray-400 font-medium">
        Powered By JayCode 🚀
      </div>
    </div>
  );
}


export default App;
