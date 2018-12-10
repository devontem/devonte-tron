import React from "react";
import Position from "./Position";
import NewPositionInput from "./NewPositionInput";

const PositionList = props => {
  return (
    <div className="col-md-8 col-xs-12" style={{ marginBottom: "80px" }}>
      {props.positions.map((item, idx) => (
        <Position key={idx} idx={idx} {...item} />
      ))}

      <NewPositionInput />
    </div>
  );
};

export default PositionList;
