import React from "react";
import UploadFileForm from "./UploadFileForm";


function UploadFileWrapper({ handleFileUpload, healthData }) {
    return (
      <div>
        <UploadFileForm handleFileUpload={handleFileUpload} />
        {healthData ? (
          <p>
            Result:
            <span>
              {healthData?.isTumorPresent
                ? " Brain tumor present"
                : " No brain tumor"}
            </span>
          </p>
        ) : null}
      </div>
    );
  }

export default UploadFileWrapper;