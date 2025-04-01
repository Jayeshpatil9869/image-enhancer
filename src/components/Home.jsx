import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) =>{
    setUploadImage(URL.createObjectURL(file))
    setloading(true)
    // calling Api
    try{
      const enhancedURL = await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL)
      setloading(false)
    }catch(error){
      console.log(error);
      alert("Error while enhancing the image. please try again later.")
    }

  }
  return (
    <div className="w-[100vw]">
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </div>
  );
}
export default Home;
