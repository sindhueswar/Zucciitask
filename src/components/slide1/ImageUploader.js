import React, { useState } from "react";
import "./ImageUploader.css";
import { FaPaperclip } from "react-icons/fa6";
import { AiFillPicture } from "react-icons/ai";
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
        <div className="imgPreview">
          <div className="imgContents">
            Please select an Image for Preview
            <div
              style={{
                backgroundColor: "#e3e8ed",
                justifycontent: "center",
                marginLeft: "25%",
              }}
            >
              <AiFillPicture
                style={{
                  color: "#6a6868",
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
          </div>
          {/* <AiFillPicture
           className="pictureicon" style={{ border: "none" }} /> */}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
