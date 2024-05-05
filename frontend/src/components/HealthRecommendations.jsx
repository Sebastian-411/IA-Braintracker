import React from "react";
import Markdown from "react-markdown";

function HealthRecommendations({ data }) {
  if (!data) return null;
  return (
    <div className="max-w-xl pl-16">
      <h3 className="text-3xl font-semibold">Prediccion: </h3>
      <p>
        <span className="font-bold">Result:</span>
        <span>{data.classification}</span>
      </p>
      <Markdown>{data.analysis_results}</Markdown>
    </div>
  );
}

export default HealthRecommendations;
