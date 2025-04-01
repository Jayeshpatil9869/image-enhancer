import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      const enhancedData = await enhancedImageAPI(file);

      if (enhancedData) {
        setEnhancedImage(enhancedData); // Store the entire object safely
      } else {
        setEnhancedImage(null); // Handle error case
      }
    } catch (error) {
      console.error("Error while enhancing the image:", error);
      alert("Error while enhancing the image. Please try again later.");
      setEnhancedImage(null);
    } finally {
      setLoading(false);
    }
  };

  console.log(enhancedImage?.image); // ✅ Prevents crash if enhancedImage is null

  return (
    <div className="w-[100vw]">
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image || ""} // ✅ Safe check before accessing .image
      />
    </div>
  );
}

export default Home;
