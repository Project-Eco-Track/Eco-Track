import React from "react";
import "./BgRound.scss";
const BgRound = ({
  className = "bg-round",
  children,
}: {
  className?: string;
  children: any;
}) => {
  return <div className={className}>{children}</div>;
};

export default BgRound;
