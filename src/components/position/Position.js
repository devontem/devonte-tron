import React from "react";

const Position = props => {
  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body">
        <h4 className="card-title">
          {props.role} at {props.company}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">{props.year}</h6>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default Position;
