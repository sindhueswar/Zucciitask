import React, { useState } from "react";
import "./ImageUploader.css";

const ImageUploader = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const allowedExtensions = /(\.png)$/i;
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
        setErrorMessage("");
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setFile("");
      setErrorMessage("Only .png files are allowed");
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
      <form onSubmit={(e) => handleSubmit(e)} >
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
