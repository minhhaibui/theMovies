import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  children,
  bgColor = "primary",
  full = false,
}) => {
  let bgClassname = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-primary";
      break;
    case "secondary":
      bgClassname = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 ${
        full ? "w-full" : ""
      } ${bgClassname} rounded-lg capitalize mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
