import React from "react";

function HealthRecommendations({ data }) {
  return (
    <div className="max-w-xl pl-16">
      <h3 className="text-3xl font-semibold">Health recommendations:</h3>
      <p className="pt-4">{data}</p>
    </div>
  );
}

export default HealthRecommendations;
