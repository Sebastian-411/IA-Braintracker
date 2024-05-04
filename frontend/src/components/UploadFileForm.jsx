import React from "react";

function UploadFileForm({
  handleFileUpload,
  expectedFiles = ["clinical_history.pdf", "brain_mri.jpeg"],
  notify,
}) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const files = e.target.elements.file.files;

    if (files.length === 0) {
      notify("No files selected", "error");
      return;
    }

    if (files.length !== expectedFiles.length) {
      console.log("hi");
      notify(`Please upload exactly ${expectedFiles.length} files`, "error");
      return;
    }

    const filenames = Array.from(files).map((file) => file.name);

    if (
      !expectedFiles.every((expectedFile) => filenames.includes(expectedFile))
    ) {
      notify("Wrong filenames", "error");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < expectedFiles.length; i++) {
      //To do, change key names
      formData.append("files", files[i]);
    }

    handleFileUpload(formData);
    notify("Files successfully sent. Processing...");
  };

  return (
    <div className="pr-8">
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <label className="text-2xl font-semibold" htmlFor="file">
          Select MRI scan and clinical history
        </label>
        <div className="flex flex-col ">
          <input
            className="pt-4 pb-2 w-full"
            type="file"
            id="file"
            name="file"
            multiple
          />

          <button className="btn btn-primary w-2/3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadFileForm;
