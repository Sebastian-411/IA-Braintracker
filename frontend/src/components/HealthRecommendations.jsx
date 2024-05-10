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
    <div className="flex flex-col">
      <p className="font-semibold text-xl max-w-xl my-4 italic">
        {data.classification}
      </p>
      <Markdown className="prose pb-10">{data.analysis_results}</Markdown>
    </div>
  );
}

export default HealthRecommendations;
