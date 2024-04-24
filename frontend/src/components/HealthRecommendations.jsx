import React from "react";
import "./css/UploadFileForm.css";
import "./css/HealthRecommendations.css";

function HealthRecommendations({ data }) {
  return (
    <div className="card llmCard">
      <h3>I have some medical history advice for you:</h3>
      <p>{data}</p>
    </div>
  );
}

export default HealthRecommendations;
