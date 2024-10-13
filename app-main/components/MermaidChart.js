// components/MermaidChart.js
import { useEffect } from 'react';

const MermaidChart = ({ chart }) => {
  useEffect(() => {
    const mermaid = require('mermaid'); // Dynamically require Mermaid
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
};

export default MermaidChart;
