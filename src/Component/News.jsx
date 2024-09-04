import React, { useState, useEffect } from "react";
import CardFilter from "./CardFilter";
import NewsPosition from "./NewsPosition";
import "./news.css";

function News() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:3000/news")
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

      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>|{filter}</span>
        </h5>
        <div className="news">
          {items &&
            items.length > 0 &&
            items.map((item) => <NewsPosition key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default News;
