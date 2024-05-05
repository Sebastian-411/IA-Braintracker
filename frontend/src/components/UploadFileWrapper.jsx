import React from "react";
import UploadFileForm from "./UploadFileForm";

function UploadFileWrapper({ handleFileUpload, healthData, notify }) {
  return (
    <div className="flex">
      <UploadFileForm handleFileUpload={handleFileUpload} notify={notify} />
      <div className="-mt-6">
        <figure>
          <img src="/brain_PNG34.png" alt="blue brain" className="max-w-48" />
        </figure>
      </div>
    </div>
  );
}

export default UploadFileWrapper;
