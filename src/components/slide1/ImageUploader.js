// import React, { useState } from 'react';
// import "./ImageUploader.css";
// const ImageUploader = () => {
//   const [file, setFile] = useState('');
//   const [imagePreviewUrl, setImagePreviewUrl] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('handle uploading-', file);
//   }

//   const handleImageChange = (e) => {
//     e.preventDefault();

//     let reader = new FileReader();
//     let newFile = e.target.files[0];

//     reader.onloadend = () => {
//       setFile(newFile);
//       setImagePreviewUrl(reader.result);
//     }

//     reader.readAsDataURL(newFile);
//   }

//   let $imagePreview = null;
//   if (imagePreviewUrl) {
//     $imagePreview = (<img src={imagePreviewUrl} alt="Preview" />);
//   } else {
//     $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//   }

//   return (
//     <div className="previewComponent">
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input className="fileInput" type="file" onChange={(e) => handleImageChange(e)} />
//         <button className="submitButton" type="submit">Upload Image</button>
//       </form>
//       <div className="imgPreview">
//         {$imagePreview}
//       </div>
//     </div>
//   );
// }

// export default ImageUploader;

// import React, { useState } from 'react';
// import "./ImageUploader.css";

// const ImageUploader = () => {
//   const [file, setFile] = useState('');
//   const [imagePreviewUrl, setImagePreviewUrl] = useState('');
//   const allowedExtensions = /(\.png)$/i; // Regular expression for PNG files

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('handle uploading-', file);
//   }

//   const handleImageChange = (e) => {
//     e.preventDefault();

//     const selectedFile = e.target.files[0];

//     if (selectedFile && allowedExtensions.test(selectedFile.name)) {
//       let reader = new FileReader();

//       reader.onloadend = () => {
//         setFile(selectedFile);
//         setImagePreviewUrl(reader.result);
//       }

//       reader.readAsDataURL(selectedFile);
//     } else {
//       alert("Please select a .png file.");
//       // Clear the input field if an invalid file is selected
//       e.target.value = null;
//     }
//   }

//   let $imagePreview = null;
//   if (imagePreviewUrl) {
//     $imagePreview = (<img src={imagePreviewUrl} alt="Preview" />);
//   } else {
//     $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//   }

//   return (
//     <div className="previewComponent">
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input className="fileInput" type="file" accept=".png" onChange={(e) => handleImageChange(e)} />
//         <button className="submitButton" type="submit">Upload Image</button>
//       </form>
//       <div className="imgPreview">
//         {$imagePreview}
//       </div>
//     </div>
//   );
// }

// export default ImageUploader;

import React, { useState } from "react";
import "./ImageUploader.css";

const ImageUploader = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const allowedExtensions = /(\.png)$/i; // Regular expression for PNG files

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];

    if (selectedFile && allowedExtensions.test(selectedFile.name)) {
      let reader = new FileReader();

      reader.onloadend = () => {
        setFile(selectedFile);
        setImagePreviewUrl(reader.result);
        setErrorMessage(""); // Clear error message if valid file selected
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setFile(""); // Clear file state if invalid file selected
      setErrorMessage("Only .png files are allowed");
      // Clear the input field if an invalid file is selected
      e.target.value = null;
    }
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} alt="Preview" />;
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }

  return (
    <div className="previewComponent">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="fileInput"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <button className="submitButton" type="submit">
          Upload Image
        </button>
      </form>

      <div className="imgPreview">{$imagePreview}</div>
    </div>
  );
};

export default ImageUploader;
