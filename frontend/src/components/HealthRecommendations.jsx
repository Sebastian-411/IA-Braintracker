import React from "react";
import Markdown from "react-markdown";

function HealthRecommendations({ data, isLoading }) {

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto mt-12"></span>
    );
  }

  if (!data) return null;

  return (
    <div className="max-w-xl pl-16">
      <p className="font-bold text-xl">{data.classification}</p>
      <Markdown className="prose my-10">{data.analysis_results}</Markdown>
    </div>
  );
}

export default HealthRecommendations;
