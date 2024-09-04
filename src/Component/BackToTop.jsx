import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a
      onClick={backToTop}
      className="back-to-top d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        visibility: scroll > 100 ? "visible" : "hidden",
        opacity: scroll > 100 ? 1 : 0,
        right: "15px",
        bottom: "15px",
        zIndex: 99999,
        width: "40px",
        height: "40px",
        borderRadius: "4px",
        transition: "all 0.4s",
        backgroundColor: scroll > 100 ? "#6776f4" : "transparent",
        color: "#fff",
      }}
    >
      <i
        className="bi bi-arrow-up-short"
        style={{ fontSize: "24px", lineHeight: "0" }}
      ></i>
    </a>
  );
}
