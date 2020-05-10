import React from "react";
import classnames from "classnames";
import "../../App.css";

const Typo = ({
  green,
  white,
  black,
  yellow,
  bold,
  normal,
  darkbackground,
  semibig,
  ...props
}) => {
  const myClass = classnames({
    green: green,
    white: white,
    black: black,
    yellow: yellow,
    bold: bold,
    normal: normal,
    "dark-background": darkbackground,
    medium: semibig,
  });

  return (
    <span style={props.style} className={myClass}>
      {props.children}
    </span>
  );
};

export default Typo;
