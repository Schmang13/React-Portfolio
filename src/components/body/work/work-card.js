import React from "react";
import "./work-card.css";
function WorkCard ({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo}className="work-logo" />
      <div className="work-info">
        <h2 className="company-name">{item.company}</h2>
        <h4 className="company-name">{item.title}</h4>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;