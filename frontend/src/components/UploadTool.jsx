import React from "react";

function UploadTool() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <p>Upload MRI scan and clinical history to check if you have a tumor</p>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        <div>
          <label for="file">Select files</label>
          <input type="file" id="file" name="file" multiple />
        </div>
      </form>
      <BrainResult isTumorPresent={false} />
    </>
  );
}

function BrainResult({ isTumorPresent }) {
  return (
    <>
      <image />
      <p>
        Result:
        <span>
          {isTumorPresent ? " Brain tumor present" : " No brain tumor"}
        </span>
      </p>
    </>
  );
}

export default UploadTool;
