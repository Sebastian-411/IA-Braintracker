import React from "react";
import Markdown from "react-markdown";
import { downloadPDF } from "../utils/downloadToPDF";

function HealthRecommendations({ data, isLoading }) {
  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto mt-12"></span>
    );
  }

  if (!data) return null;

  return (
    <div className="flex flex-col">
      <button
        onClick={() =>
          downloadPDF(`${data.classification}\n\n${data.analysis_results}`)
        }
        className="btn btn-secondary w-1/3 self-center m-4"
      >
        Descargar PDF
      </button>
      <p className="font-semibold text-xl max-w-xl my-4 italic">
        {data.classification}
      </p>
      <Markdown className="prose pb-10">{data.analysis_results}</Markdown>
    </div>
  );
}

export default HealthRecommendations;
