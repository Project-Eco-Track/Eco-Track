import React from "react";
import "./IconBadge.scss";

interface Props {
  color: string;
  icon: string;
  title: string;
  description: string;
  disable: boolean;
}

const IconBadge = ({ color, icon, title, description, disable }: Props) => {
  return (
    <div className={`badge ${disable? "silver": color} ${disable ? "disable" : ""}`}>
      <div className="circle">
        {" "}
        <i className={icon}></i>
      </div>
      <div className="ribbon">{title}</div>
    </div>
  );
};

export default IconBadge;
