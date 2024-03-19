// import React, { useState } from "react";
// import "./ImageUploader.css";
// import { FaPaperclip } from "react-icons/fa6";
// const ImageUploader = () => {
//   const [file, setFile] = useState("");
//   const [imagePreviewUrl, setImagePreviewUrl] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const allowedExtensions = /(\.png)$/i;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("handle uploading-", file);
//   };

//   const handleImageChange = (e) => {
//     e.preventDefault();

//     const selectedFile = e.target.files[0];

//     if (selectedFile && allowedExtensions.test(selectedFile.name)) {
//       let reader = new FileReader();

//       reader.onloadend = () => {
//         setFile(selectedFile);
//         setImagePreviewUrl(reader.result);
//         setErrorMessage("");
//       };

//       reader.readAsDataURL(selectedFile);
//     } else {
//       setFile("");
//       setErrorMessage("Only .png files are allowed");
//       e.target.value = null;
//     }
//   };

//   return (
//     <div className="previewComponent">
//       <form onSubmit={(e) => handleSubmit(e)}>
//                 <label for="fileInput">
//           <FaPaperclip />
//           Choose File
//         </label>
//         <input type="file" id="fileInput" onChange={(e) => handleImageChange(e)}></input>
//         {errorMessage && <div className="errorMessage">{errorMessage}</div>}
//         <button className="submitButton" type="submit">
//           Upload Image
//         </button>
//       </form>

//       <div className="imgPreview">Please select an Image for Preview</div>
//     </div>
//   );
// };

// export default ImageUploader;

import React, { useState } from "react";
import "./ImageUploader.css";
import { FaPaperclip } from "react-icons/fa6";

const ImageUploader = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("No file chosen");

  const allowedExtensions = /\.png$/i;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];

    if (allowedExtensions.test(selectedFile.name)) {
      let reader = new FileReader();

      reader.onloadend = () => {
        setFile(selectedFile);
        setImagePreviewUrl(reader.result);
        setErrorMessage("");
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setFile("");
      setErrorMessage("Only .png files allowed");
      e.target.value = null;
    }
  };

  return (
    <div className="previewComponent">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="choosefile">
          <label htmlFor="fileInput">
            <FaPaperclip />
            Choose File
          </label>

          <input
            type="file"
            id="fileInput"
            onChange={(e) => handleImageChange(e)}
          />
          {errorMessage && (
            <div
              className={`errorMessage ${
                errorMessage === "Only .png files allowed"
                  ? "error-styled"
                  : "errorMessage"
              }`}
            >
              {errorMessage}
            </div>
          )}
        </div>

        <button className="submitButton" type="submit">
          Upload Image
        </button>
      </form>

      {imagePreviewUrl && (
        <div className="imgPreview">
          <img src={imagePreviewUrl} alt="Preview" />
        </div>
      )}
      {!imagePreviewUrl && (
        <div className="imgPreview">Please select an Image for Preview</div>
      )}
    </div>
  );
};

export default ImageUploader;
