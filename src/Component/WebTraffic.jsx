import { useState } from "react";
import CardFilter from "./CardFilter";
import WebTrafficChart from "./WebTrafficChart";

function WebTraffic() {
  // const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="class-title">
          Website Traffic <span>|{filter}</span>
        </h5>
        <WebTrafficChart />
      </div>
    </div>
  );
}

export default WebTraffic;
