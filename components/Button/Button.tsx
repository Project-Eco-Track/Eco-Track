import React from "react";
import "./Button.scss";
import Link from "next/link";
interface ButtonProps {
  children: React.ReactNode;
  open: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ open, children }) => {
  return (
    <Link href={open} className="button" title="">
      {children}
    </Link>
  );
};

const IconButton: React.FC<ButtonProps> = ({ open, children, target="_self" }) => {
  return (
    <div onClick={() => window.open(open, target)} className="icon-button">
      {children}
    </div>
  );
};

export { IconButton };
export default Button;
