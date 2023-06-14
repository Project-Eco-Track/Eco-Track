import React from "react";
import "./Button.scss";
interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className="button">{children}</div>;
};

const IconButton: React.FC<ButtonProps> = ({ children }) => {
    return <div className="icon-button">{children}</div>;
};

export { IconButton };
export default Button;
