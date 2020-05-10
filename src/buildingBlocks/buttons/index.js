import React from "react";
import classnames from "classnames";
import "../../App.css";

const Index = ({ primary, bright, border, ...props }) => {
  const mClass = classnames({
    "green-btn": primary,
    "bright-btn": bright,
    "border-btn": border,
  });
  return (
    <button style={props.style} className={mClass}>
      {props.children}
    </button>
  );
};

export default Index;
