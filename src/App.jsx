import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-300 py-8 px-4 overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enhance</h1>
        <p className="text-lg text-gray-500">
          Upload your image and let AI enhance it in seconds!
        </p>
      </div>
      <Home />
      <div className="text-sm mt-6 text-gray-500">Powered By AI</div>
    </div>
  );
}

export default App;
