import React from "react";

function HealthRecommendations({ data }) {
  return (
    <div>
      <h3>I have some medical history advice for you:</h3>
      <p>{data}</p>
    </div>
  );
}

export default HealthRecommendations;
