import React from "react";

function HealthRecommendations({ data }) {
  return (
    <div className="flex">
      <div className="card-normal bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">
            I have some medical history advice for you:
          </h3>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
}

export default HealthRecommendations;
