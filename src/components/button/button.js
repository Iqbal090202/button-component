import React from "react";
import './button.css';

const CustomButton = props => {
  return <button className={"btn-" + props.theme}>{props.children}</button>;
};

export default CustomButton;
