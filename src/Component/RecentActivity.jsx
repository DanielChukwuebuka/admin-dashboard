// import React, { useEffect, useState } from "react";
// import CardFilter from "./CardFilter";
// import RecentActivityItem from "./RecentActivityItem";

// function RecentActivity() {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("Today");

//   function handleFilterChange(newFilter) {
//     setFilter(newFilter);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch("http://localhost:3000/recentactiviy")
//       .then((res) => res.json())
//       .then((data) => {
//         setItems(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   return (
//     <div className="card">
//       <CardFilter filterChange={handleFilterChange} />
//       <div className="card-body">
//         <h5 className="card-title">
//           Recent Activity <span>| {filter}</span>
//         </h5>
//         <div style={{ fontSize: "14px" }}>
//           {items &&
//             items.length > 0 &&
//             items.map((item, index) => (
//               <RecentActivityItem
//                 key={item._id}
//                 item={item}
//                 isFirst={index === 0}
//                 isLast={index === items.length - 1}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecentActivity;
import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";

function RecentActivity() {
  // Define mock data directly in the component
  const mockRecentActivity = [
    {
      _id: 1,
      time: "32 min",
      color: "text-success",
      content: "Quia quae rerum explicabo officiis beatae",
      highlight: "explicabo officiis",
    },
    {
      _id: 2,
      time: "56 min",
      color: "text-danger",
      content: "Voluptatem blanditiis blanditiis eveniet",
      highlight: "",
    },
    {
      _id: 3,
      time: "2 hrs",
      color: "text-primary",
      content: "Voluptates corrupti molestias voluptatem",
      highlight: "",
    },
    {
      _id: 4,
      time: "1 day",
      color: "text-info",
      content: "Tempore autem saepe occaecati voluptatem tempore",
      highlight: "occaecati voluptatem",
    },
    {
      _id: 5,
      time: "2 days",
      color: "text-warning",
      content: "Est sit eum reiciendis exercitationem",
      highlight: "",
    },
    {
      _id: 6,
      time: "4 weeks",
      color: "text-muted",
      content: "Dicta dolorem harum nulla eius. Ut quidem quidem sit quas",
      highlight: "",
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
        // Set mock data instead of fetching
        setItems(mockRecentActivity);
        setLoading(false);
      } catch (err) {
        console.error("Error loading mock data:", err);
        setError(err);
        setLoading(false);
      }
    }, 1000); // 1 second delay for demonstration
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
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
