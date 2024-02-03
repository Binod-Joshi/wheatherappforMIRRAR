import React from "react";
import "./DateAndTime.css";

const DateAndTime = () => {
  const today = new Date();
  console.log(today);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
  console.log(formattedDate);

  return (
    <div className="dates">
      <div className="dateTime">
        <p style={{ background: "none", fontWeight: "bold" }}>
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default DateAndTime;
