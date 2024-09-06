// import React, { useEffect, useState } from "react";
// import CardFilter from "./CardFilter";
// import TopSellingItem from "./TopSellingItem";

// function TopSelling() {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("Today");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch("http://localhost:3000/topselling")
//       .then((res) => res.json())
//       .then((data) => {
//         setItems(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   function handleFilterChange(newFilter) {
//     setFilter(newFilter);
//   }

//   return (
//     <div
//       style={{ fontSize: "14px", overflow: "auto" }}
//       className="card top-selling"
//     >
//       <CardFilter filterChange={handleFilterChange} />

//       <div className="card-body pb-0">
//         <h5 className="card-title">
//           Top Selling <span>| {filter}</span>
//         </h5>
//       </div>
//       <table className="table table-borderless">
//         <thead style={{ backgroundColor: "#f6f6fe" }} className="table-light">
//           <tr>
//             <th scope="col">Preview</th>
//             <th scope="col">Product</th>
//             <th scope="col">Price</th>
//             <th scope="col">Sold</th>
//             <th scope="col">Revenue</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <TopSellingItem key={item._id} item={item} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TopSelling;
import React, { useEffect, useState } from "react";
import CardFilter from "./CardFilter";
import TopSellingItem from "./TopSellingItem";

const mockTopSellingData = [
  {
    _id: 1,
    preview: "../assets/items/product-1.jpg",
    name: "Ut inventore ipsa voluptas nulla",
    price: 64,
    sold: 124,
  },
  {
    _id: 2,
    preview: "../assets/items/product-2.jpg",
    name: "Exercitationem similique doloremque",
    price: 46,
    sold: 98,
  },
  {
    _id: 3,
    preview: "../assets/items/product-3.jpg",
    name: "Doloribus nisi exercitationem",
    price: 59,
    sold: 74,
  },
  {
    _id: 4,
    preview: "../assets/items/product-4.jpg",
    name: "Officiis quaerat sint rerum error",
    price: 32,
    sold: 63,
  },
  {
    _id: 5,
    preview: "../assets/items/product-5.jpg",
    name: "Sit unde debitis delectus repellendus",
    price: 79,
    sold: 41,
  },
];

function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  useEffect(() => {
    // Set items with mock data
    setItems(mockTopSellingData);
  }, []);

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div
      style={{ fontSize: "14px", overflow: "auto" }}
      className="card top-selling"
    >
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>
      </div>
      <table className="table table-borderless">
        <thead style={{ backgroundColor: "#f6f6fe" }} className="table-light">
          <tr>
            <th scope="col">Preview</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Sold</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => <TopSellingItem key={item._id} item={item} />)
          ) : (
            <tr>
              <td colSpan="5">No top selling items available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TopSelling;
