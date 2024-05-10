import React from "react";
import UploadFileForm from "./UploadFileForm";

function UploadFileWrapper({ handleFileUpload, notify, disabled }) {
  return (
    <div className="flex self-center">
      <UploadFileForm
        handleFileUpload={handleFileUpload}
        notify={notify}
        disabled={disabled}
      />
      <div className="self-center">
        <figure>
          <img src="/brain_PNG34.png" alt="blue brain" className="max-w-48" />
        </figure>
      </div>
    </div>
  );
}

export default UploadFileWrapper;
