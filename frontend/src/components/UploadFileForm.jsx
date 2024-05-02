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
    <div className="pr-8">
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <label className="text-2xl font-semibold" htmlFor="file">
          Select MRI scan and clinical history
        </label>
        <div className="flex flex-col ">
          <input
            className="pt-4 pb-2 w-1/2"
            type="file"
            id="file"
            name="file"
            multiple
          />

          <button className="btn btn-primary w-1/2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadFileForm;
