import React from "react";


export const Button = ({ text, color, type, leftIcon, rightIcon, className,...other }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn ${color ? `btn-${color}` : ""} ${className}`}
      {...other}
    >
      {text}
    </button>
  );
};