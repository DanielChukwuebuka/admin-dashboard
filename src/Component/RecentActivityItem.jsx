import React from "react";

function RecentActivityItem({ item, isFirst, isLast }) {
  const activityItemStyle = {
    display: "flex",
    fontSize: "14px",
  };

  const activityLabelStyle = {
    color: "#888",
    position: "relative",
    flexShrink: 0,
    flexGrow: 0,
    minWidth: "64px",
    ...(isFirst && {
      "::before": {
        top: "5px",
      },
    }),
  };

  const activityLabelBeforeStyle = {
    content: '""',
    position: "absolute",
    right: "-11px",
    width: "4px",
    top: 0,
    bottom: 0,
    backgroundColor: "#eceefe",
    ...(isFirst && {
      top: "5px",
    }),
  };

  const activityBadgeStyle = {
    marginTop: "3px",
    zIndex: 1,
    fontSize: "11px",
    lineHeight: 0,
    borderRadius: "50%",
    flexShrink: 0,
    border: "3px solid #fff",
    flexGrow: 0,
  };

  const activityContentStyle = {
    paddingLeft: "10px",
    paddingBottom: isLast ? "0" : "20px",
  };

  return (
    <div style={activityItemStyle}>
      <div style={activityLabelStyle}>
        {item.time}
        <div style={activityLabelBeforeStyle}></div>
      </div>
      <i
        className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}
        style={activityBadgeStyle}
      ></i>
      {item.highlight === "" ? (
        <div style={activityContentStyle}>{item.content}</div>
      ) : (
        <div style={activityContentStyle}>
          {item.content.substring(0, item.content.indexOf(item.highlight))}
          <a href="#" className="fw-bold text-dark">
            {item.highlight}
          </a>
          {item.content.slice(
            item.content.indexOf(item.highlight) + item.highlight.length
          )}
        </div>
      )}
    </div>
  );
}

export default RecentActivityItem;
