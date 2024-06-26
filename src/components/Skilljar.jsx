import React from "react";

function Skilljar({ name, width }) {
  return (
    <div className="skill-container">
      <p className="skill-name">{name}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: width }}></div>
      </div>
    </div>
  );
}

export default Skilljar;
