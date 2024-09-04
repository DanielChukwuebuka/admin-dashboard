import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import TopSellingItem from "./TopSellingItem";

function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:3000/topselling")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>
      </div>
      <table className="table table-borderless">
        <thead className="table-light">
          <tr>
            <th scope="col">Preview</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Sold</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TopSellingItem key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSelling;
