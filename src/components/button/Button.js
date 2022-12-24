import React from "react";


export const Button = ({ text, color, type, leftIcon, rightIcon, ...other }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn ${color ? `btn-${color}` : ""}`}
      {...other}
    >
      {text}
    </button>
  );
};