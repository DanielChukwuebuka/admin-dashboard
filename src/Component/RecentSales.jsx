// import React, { useState } from "react";
import { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import RecentSalesTable from "./RecentSalesTable";
import "./recentsales.css";

function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:3000/recentsales")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Reports <span>/{filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  );
}

export default RecentSales;
