import React from "react";

function UploadFileForm({ handleFileUpload }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const files = e.target.elements.file.files;

    if (files.length === 0) {
      console.log("No files selected");
      return;
    }
    // Create a new FormData instance
    const formData = new FormData();
    // Append each file to the form data
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    handleFileUpload(formData);
  };
  return (
    <>
      <p>Upload MRI scan and clinical history to check if you have a tumor</p>
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <div>
          <label htmlFor="file">Select files</label>
          <input type="file" id="file" name="file" multiple />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UploadFileForm;
