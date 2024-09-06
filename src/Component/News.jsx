// import React, { useState, useEffect } from "react";
// import CardFilter from "./CardFilter";
// import NewsPosition from "./NewsPosition";
// import "./news.css";

// function News() {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("Today");

//   function handleFilterChange(newFilter) {
//     setFilter(newFilter);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch("http://localhost:3000/news")
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

//       <div className="card-body pb-0">
//         <h5 className="card-title">
//           News &amp; Updates <span>|{filter}</span>
//         </h5>
//         <div className="news">
//           {items &&
//             items.length > 0 &&
//             items.map((item) => <NewsPosition key={item._id} item={item} />)}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;
import React, { useState, useEffect } from "react";
import CardFilter from "./CardFilter";
import NewsPosition from "./NewsPosition";
import "./news.css";

const mockNewsData = [
  {
    _id: 1,
    img: "../assets/items/news-1.jpg",
    title: "Nihil blanditiis at in nihil autem",
    subtitle:
      "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum",
    category: "abc",
  },
  {
    _id: 2,
    img: "../assets/items/news-2.jpg",
    title: "Quidem autem et impedit",
    subtitle:
      "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande",
    category: "abc",
  },
  {
    _id: 3,
    img: "../assets/items/news-3.jpg",
    title: "Id quia et et ut maxime similique occaecati ut",
    subtitle:
      "Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam",
    category: "abc",
  },
  {
    _id: 4,
    img: "../assets/items/news-4.jpg",
    title: "Laborum corporis quo dara net para",
    subtitle:
      "Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder",
    category: "abc",
  },
  {
    _id: 5,
    img: "../assets/items/news-5.jpg",
    title: "Et dolores corrupti quae illo quod dolor",
    subtitle:
      "Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius",
    category: "abc",
  },
];

function News() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  useEffect(() => {
    // Set items with mock data
    setItems(mockNewsData);
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </h5>
        <div className="news">
          {items && items.length > 0 ? (
            items.map((item) => <NewsPosition key={item._id} item={item} />)
          ) : (
            <p>No news items available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
