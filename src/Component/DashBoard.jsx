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

// Mock data directly within the component
const mockData = {
  cards: [
    {
      _id: 1,
      name: "Sales",
      icon: "bi bi-cart",
      amount: 145,
      percentage: 0.12,
      active: true,
    },
    {
      _id: 2,
      name: "Revenue",
      icon: "bi bi-currency-dollar",
      amount: 3246,
      percentage: 0.08,
      active: false,
    },
    {
      _id: 3,
      name: "Customers",
      icon: "bi bi-people",
      amount: 1244,
      percentage: -0.11,
      active: false,
    },
  ],
};

function DashBoard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Instead of fetching, we use the mock data directly
    setCards(mockData.cards);
  }, []);

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
