import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      style={{
        padding: "20px 0",
        fontSize: "14px",
        transition: "all 0.3s",
        borderTop: "1px solid #cddfff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "#012970",
        }}
      >
        &copy; Copyright{" "}
        <strong>
          <span>Ayo Dev</span>
        </strong>
        . All Rights Reserved
      </div>
      <div
        style={{
          paddingTop: "5px",
          textAlign: "center",
          fontSize: "13px",
          color: "#012970",
        }}
      >
        Designed by{" "}
        <a href="#" style={{ color: "#012970", textDecoration: "none" }}>
          Ayo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
