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
    <div className={`badge ${disable ? "silver disable" : color}`}>
      <div className="tooltip">{description}</div>
      <div className={`circle ${disable ? "opacity-25" : "opacity-100"}`}>
        {" "}
        <i className={icon}></i>
      </div>
      <div className={`ribbon ${disable ? "opacity-25" : "opacity-100"}`}>
        {title}
      </div>
    </div>
  );
};

export default IconBadge;
