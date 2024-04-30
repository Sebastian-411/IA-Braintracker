import React from "react";
import UploadFileForm from "./UploadFileForm";

function UploadFileWrapper({ handleFileUpload, healthData }) {
  return (
    <div className="flex">
      <UploadFileForm handleFileUpload={handleFileUpload} />
      <div className="flex w-80">
        <div className="card-normal bg-base-100 shadow-xl">
          <div className="card-body">
            <figure>
              <img
                src="https://pngimg.com/uploads/brain/brain_PNG34.png"
                alt="blue brain"
              />
            </figure>
            {healthData ? (
              <p className="card-body">
                <p className="card-title">Result:</p>
                <span>
                  {healthData?.isTumorPresent
                    ? " Brain tumor present"
                    : " No brain tumor"}
                </span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFileWrapper;
