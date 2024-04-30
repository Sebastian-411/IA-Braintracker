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
    <div className="flex">
      <div className="card-normal bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="card-title">
            Upload MRI scan and clinical history to check if you have a tumor
          </p>
          <div className="card-body text-center">
            <form encType="multipart/form-data" onSubmit={submitHandler}>
              <div className="card-body justify-center">
                <label htmlFor="file"></label>
                <input type="file" id="file" name="file" multiple />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-lg btn-primary" type="submit">
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFileForm;
