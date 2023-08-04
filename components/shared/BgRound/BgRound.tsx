import React from "react";
import "./BgRound.scss";
const BgRound = ({ children }: { children: any }) => {
  return <div className="bg-round">
    {children}
  </div>;
};

export default BgRound;
