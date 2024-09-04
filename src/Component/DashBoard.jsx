import { useState, useEffect } from "react";
// import "./dashboard.css";
import Card from "./Card";
import Report from "./Report";
import RecentSales from "./RecentSales";
import TopSetting from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";

function DashBoard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <section className="Dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards &&
              cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card} />)}
            <div className="col-12">
              <Report />
              <div className="col-12">
                <RecentSales />
              </div>
              <div className="col-12">
                <TopSetting />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
}

export default DashBoard;
