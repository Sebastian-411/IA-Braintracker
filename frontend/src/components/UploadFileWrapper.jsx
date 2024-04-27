import React from "react";
import UploadFileForm from "./UploadFileForm";

function UploadFileWrapper({ handleFileUpload, healthData }) {
  return (
    <div className="flex">
      <UploadFileForm handleFileUpload={handleFileUpload} />
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://pngimg.com/uploads/brain/brain_PNG34.png" alt="blue brain" /></figure>        
        {healthData ? (
          <p className="card-body">
            Result:
            <span>
              {healthData?.isTumorPresent
                ? " Brain tumor present"
                : " No brain tumor"}
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default UploadFileWrapper;
