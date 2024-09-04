import React from "react";

function NewsPosition({ item }) {
  return (
    <div style={{ marginTop: "15px" }}>
      <img
        src={item.img}
        alt=""
        style={{
          width: "80px",
          float: "left",
          borderRadius: "5px",
        }}
      />
      <h4
        style={{
          fontSize: "15px",
          marginLeft: "95px",
          fontWeight: "bold",
          marginBottom: "5px",
        }}
      >
        <a
          href={item.link}
          style={{
            color: "#012970",
            transition: "0.3s",
          }}
        >
          {item.title}
        </a>
      </h4>
      <p
        style={{
          fontSize: "14px",
          color: "#777777",
          marginLeft: "95px",
        }}
      >
        {item.subtitle}.....
      </p>
    </div>
  );
}

export default NewsPosition;
