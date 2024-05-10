import React from "react";
import Markdown from "react-markdown";
import { downloadPDF } from "../utils/downloadPDF";

function HealthRecommendations({ data, isLoading }) {
  const markdownRef = React.useRef();

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto mt-12"></span>
    );
  }

  if (!data) return null;

  return (
    <div className="flex flex-col">
      <button
        onClick={() => downloadPDF(markdownRef.current)}
        className="btn btn-secondary w-1/3 self-center m-4"
      >
        Descargar PDF
      </button>
      <div className="" ref={markdownRef}>
        <p className="font-semibold text-xl max-w-xl m-4 italic">
          {data.classification}
        </p>
        <Markdown className="prose my-10 m-auto">
          {data.analysis_results}
        </Markdown>
      </div>
    </div>
  );
}

export default HealthRecommendations;
