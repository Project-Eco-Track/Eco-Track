import React from "react";
import "./Button.scss";
interface ButtonProps {
  children: React.ReactNode;
  open: string;
}

const Button: React.FC<ButtonProps> = ({ open, children }) => {
  return (
    <div onClick={() => (window.location.href = open)} className="button">
      {children}
    </div>
  );
};

const IconButton: React.FC<ButtonProps> = ({ open, children }) => {
  return (
    <div onClick={() => window.location.replace(open)} className="icon-button">
      {children}
    </div>
  );
};

export { IconButton };
export default Button;
