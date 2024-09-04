import { useState } from "react";
import CardFilter from "./CardFilter";

function Card({ card }) {
  const [filter, setFilter] = useState("Today");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const cardIconClass = card.icon;
  const cardTitle = `${card.name} | ${filter}`;
  const cardAmount =
    card.name === "Revenue"
      ? `$${card.amount.toLocaleString("en-US")}`
      : card.amount.toLocaleString("en-US");
  const percentageClass =
    card.percentage > 0 ? { color: "green" } : { color: "red" };
  const percentageText = `${Math.abs(card.percentage)}%`;
  const percentageChangeText = card.percentage > 0 ? "increase" : "decrease";

  const cardStyles = {
    paddingBottom: "10px",
  };

  const cardTitleStyles = {
    fontSize: "20px",
    color: "#012970",
    fontWeight: 700,
    margin: 0,
    padding: 0,
  };

  const cardIconStyles = {
    fontSize: "32px",
    lineHeight: 0,
    width: "64px",
    flexShrink: 0,
    flexGrow: 0,
    color:
      card.name === "Revenue"
        ? "#2eca6a"
        : card.name === "Sales"
        ? "#012970"
        : card.name === "Customers"
        ? "#ff771d"
        : "",
    background:
      card.name === "Revenue"
        ? "#e0f8e9"
        : card.name === "Sales"
        ? "#f6f6fe"
        : card.name === "Customers"
        ? "#ffecdf"
        : "",
  };

  return (
    <div className="col-xxl-4 col-md-6" style={cardStyles}>
      <div className="card info-card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyles}>
            {cardTitle}
          </h5>

          <div className="d-flex align-items-center">
            <div
              className="card-icon rounded-circle d-flex align-items-center justify-content-center"
              style={cardIconStyles}
            >
              <i className={cardIconClass}></i>
            </div>
            <div className="ps-3">
              <h6>{cardAmount}</h6>
              <span
                style={{
                  ...percentageClass,
                  fontSize: "small",
                  paddingTop: "1px",
                  fontWeight: "bold",
                }}
              >
                {percentageText}
              </span>
              <span className="text-muted small pt-2 ps-1">
                {percentageChangeText}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
