function ImageUpload(props) {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl px-6 py-4  w-[60vh] max-w-lg mx-auto border border-gray-200">
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center w-full h-20 cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler} />
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-medium text-gray-600">
            Click or Drag to Upload Image
          </span>
        </div>
      </label>
    </div>
  );
}
export default ImageUpload;
