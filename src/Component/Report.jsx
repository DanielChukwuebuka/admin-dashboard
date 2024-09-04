import React, { useState } from "react";
import CardFilter from "./CardFilter";
import ReportsCharts from "./ReportsCharts";

function Report() {
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reports <span>/{filter}</span>
        </h5>
        <ReportsCharts />
      </div>
    </div>
  );
}

export default Report;
