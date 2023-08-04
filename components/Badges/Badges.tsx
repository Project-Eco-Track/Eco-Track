import React from "react";
import BgRound from "@components/shared/BgRound";
import IconBadge from "./IconBadge";
import getBadgeData from "@libs/getBadgeData";
import "./IconBadge/IconBadge.scss";
const Badges = () => {
  const badgeData = JSON.parse(getBadgeData());
  return (
    <BgRound>
      <div className="main-wrapper">
        {badgeData.map((badge: any) => (
          <IconBadge
            key={badge.title}
            color={badge.color}
            icon={badge.icon}
            title={badge.title}
            description={badge.description}
            disable={badge.disable}
          />
        ))}
      </div>
    </BgRound>
  );
};

export default Badges;
