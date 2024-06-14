import React from "react";
import { RenderLatex } from "./RenderLatex";
import { GetDiagram } from "./GetDiagram";
import { removeResult } from "../pages/api/api";

const ResultItem = ({ item, onDelete }) => {
  const handleDelete = async () => {
    document.getElementById(`result-item-${item.id}`).classList.add("removing");
    setTimeout(() => onDelete(item.id), 1000); // Adjust the timeout duration to match the CSS transition duration
    try {
      await removeResult(item.id);
    } catch (error) {
      console.error("Failed to remove result:", error);
    }
  };

  return (
    <div id={`result-item-${item.id}`} className="result-item">
      <button id="delete-button" onClick={handleDelete}>
        ✘
      </button>
      <div>
        <h5>Problem:</h5>
        <RenderLatex latex={item.problem} />
      </div>
      <div id="solution-container">
        <h5>Solution:</h5>
        <RenderLatex latex={item.solution} />
      </div>
      <div id="diagram-container">
        <GetDiagram TikzCode={item.diagram} />
      </div>
    </div>
  );
};

export default ResultItem;
