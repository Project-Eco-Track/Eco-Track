import React from "react";
import BgRound from "@components/shared/BgRound";
import IconBadge from "./IconBadge";
import AwardBadge from "./AwardBadge";
import getBadgeData from "@libs/getBadgeData";
import "./Badges.scss";

import "./IconBadge/IconBadge.scss";
const Badges = async () => {
  const badgeData = JSON.parse(await getBadgeData());
  return (
    <BgRound>
      <h1 className="text-5xl font-[600] underline-anim mt-10 mb-5">
        <span>Award Badges</span>
      </h1>
      <AwardBadge />
      <h1 className="text-5xl font-[600] underline-anim mt-24">
        <span>Eco Badges</span>
      </h1>
      <div className="main-wrapper">
        {badgeData.map((badge: any) => (
          <IconBadge
            key={badge.title}
            color={badge.color}
            icon={badge.icon}
            title={badge.title}
            description={badge.description}
            disable={badge.disable === false ? badge.disable : true}
          />
        ))}
      </div>
    </BgRound>
  );
};

export default Badges;
