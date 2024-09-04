import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";

function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:3000/recentactiviy")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div style={{ fontSize: "14px" }}>
          {items &&
            items.length > 0 &&
            items.map((item, index) => (
              <RecentActivityItem
                key={item._id}
                item={item}
                isFirst={index === 0}
                isLast={index === items.length - 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
