import Loading from "./Loading";

function ImagePreview(props) {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-10 hover:shadow-2xl backdrop-blur-lg shadow-xl rounded-xl overflow-hidden border border-gray-300 transition-all duration-300">
        <h2 className="text-lg font-semibold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3">
          Original Image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Uploaded Image"
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200 bg-opacity-30 text-black">
            No Image Selected
          </div>
        )}
      </div>

      <div className="bg-white bg-opacity-10 hover:shadow-2xl backdrop-blur-lg shadow-xl rounded-xl overflow-hidden border border-gray-300 transition-all duration-300">
        <h2 className="text-lg font-semibold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3">
          Enhanced Image
        </h2>
        {props.enhanced && !props.loading ? (
          <img
            src={props.enhanced}
            alt="Enhanced Image"
            className="w-full h-80 object-cover"
          />
        ) : props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200 bg-opacity-30 text-black">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
}
export default ImagePreview;
