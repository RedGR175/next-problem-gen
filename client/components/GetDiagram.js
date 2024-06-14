import React, { useState, useEffect } from "react";
import { getDiagram } from "../pages/api/api";

export const GetDiagram = ({ tikzCode }) => {
  const [renderedUrl, setRenderedUrl] = useState("");

  useEffect(() => {
    const fetchDiagram = async () => {
      if (tikzCode) {
        const url = await getDiagram(tikzCode);
        setRenderedUrl(url);
      }
    };

    fetchDiagram();
  }, [tikzCode]);

  return renderedUrl ? <img src={renderedUrl} alt="Rendered Diagram" className="diagram" /> : null;
};
