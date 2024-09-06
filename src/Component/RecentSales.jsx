// // import React, { useState } from "react";
// import { useEffect, useState } from "react";
// import CardFilter from "./CardFilter";
// import RecentSalesTable from "./RecentSalesTable";
// import "./recentsales.css";

// function RecentSales() {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("Today");

//   function handleFilterChange(newFilter) {
//     setFilter(newFilter);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch("http://localhost:3000/recentsales")
//       .then((res) => res.json())
//       .then((data) => {
//         setItems(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   return (
//     <div className="card recent-sales overflow-auto">
//       <CardFilter filterChange={handleFilterChange} />
//       <div className="card-body">
//         <h5 className="card-title">
//           Reports <span>/{filter}</span>
//         </h5>
//         <RecentSalesTable items={items} />
//       </div>
//     </div>
//   );
// }

// export default RecentSales;
import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import RecentSalesTable from "./RecentSalesTable";
import "./recentsales.css";

function RecentSales() {
  // Define mock data directly in the component
  const mockRecentSales = [
    {
      _id: 1,
      number: "#2457",
      customer: "Brandon Jacob",
      product: "At praesentium minu",
      price: 64,
      status: "Approved",
    },
    {
      _id: 2,
      number: "#2147",
      customer: "Bridie Kessler",
      product: "Blanditiis dolor omnis similique",
      price: 47,
      status: "Pending",
    },
    {
      _id: 3,
      number: "#2049",
      customer: "Ashleigh Langosh",
      product: "At recusandae consectetur",
      price: 147,
      status: "Approved",
    },
    {
      _id: 4,
      number: "#2644",
      customer: "Angus Grady",
      product: "Ut voluptatem id earum et",
      price: 67,
      status: "Rejected",
    },
    {
      _id: 5,
      number: "#3592",
      customer: "Raheem Lehner",
      product: "Sunt similique distinctio",
      price: 135,
      status: "Approved",
    },
  ];

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  useEffect(() => {
    // Simulate a delay to mimic loading state
    setLoading(true);
    setTimeout(() => {
      try {
        setItems(mockRecentSales);
        setLoading(false);
      } catch (err) {
        console.error("Error loading mock data:", err);
        setError(err);
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
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
