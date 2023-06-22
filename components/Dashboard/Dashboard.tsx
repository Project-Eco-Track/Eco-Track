import React from "react";
import TopBar from "./TopBar";
import BadgeCard from "./BadgeCard";
import { BadgeCardSkeleton } from "./BadgeCard/BadgeCard";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="text-white flex justify-center p-10">
        <TopBar />
      </div>
      <div className="text-white flex flex-wrap gap-10 px-20">
        <BadgeCard
          img="https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-green-eco-friendly-logo-symbol-design-png-image_6093132.png"
          starNum={2}
          desc={"Earned for planting 5 trees"}
          title={"Tree Planter"}
        />
        <BadgeCardSkeleton/>
        <BadgeCardSkeleton/>
        <BadgeCardSkeleton/>
        <BadgeCardSkeleton/>
        <BadgeCardSkeleton/>
      </div>
    </>
  );
};

export default Dashboard;
