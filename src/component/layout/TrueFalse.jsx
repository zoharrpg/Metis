import React from "react";
import "./truefalse.css";

const TrueFalse = (props) => {
  return <div className={"logo round " + props.sty}>{props.decision}</div>;
};
export default TrueFalse;
