import React from "react";

function Loading() {
  return (
    <div  className="flex justify-center items-center h-full ">
      <div className="border-4 w-10 h-10 scale-110 rounded-full border-red-300 border-t-transparent animate-spin"></div>
    </div>
  )
}
export default Loading