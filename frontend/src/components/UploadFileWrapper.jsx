import React from "react";
import UploadFileForm from "./UploadFileForm";

function UploadFileWrapper({ handleFileUpload, healthData }) {
  return (
    <div className="flex">
      <UploadFileForm handleFileUpload={handleFileUpload} />
      <div className="-mt-6">
        <figure>
          <img src="/brain_PNG34.png" alt="blue brain" className="max-w-48" />
        </figure>
        {healthData ? (
          <p>
            <span className="font-bold">Result:</span>
            <span>
              {healthData?.isTumorPresent
                ? " Tumor present"
                : " No tumor present"}
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default UploadFileWrapper;
