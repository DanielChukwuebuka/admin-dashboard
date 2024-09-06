import React from "react";

function TopSellingItem({ item }) {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img
            src={item.preview}
            alt={item.name}
            style={{
              borderRadius: "5px",
              maxWidth: "60px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </a>
      </th>
      <td>
        <a
          href="#"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          {item.name}
        </a>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td style={{ fontWeight: "bold" }}>{item.sold}</td>
      <td>${(item.price * item.sold).toLocaleString("en-US")}</td>
    </tr>
  );
}

export default TopSellingItem;
