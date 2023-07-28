import { HelpCircle, TreePine } from "lucide-react";
import React from "react";
import Image from "next/image";
import Star from "./Star";

interface BadgeCardProps {
  img: string;
  desc: string;
  starNum: number;
  title: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ img, desc, starNum, title }) => {
  return (
    <>
      <div className="aspect-square bg-gray-800 w-72 flex-col flex gap-5 items-center rounded-xl p-5 border border-gray-700">
        <div className="flex gap-2">
          {Array.from({ length: starNum }).map((_, i) => (
            <div key={i}>
              <div className="text-yellow-500">
                <Star size={25} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center text-green-800">
          <TreePine size={110} />
        </div>
        <div className="h-4 font-semibold break-word text-center text-lg">
          {title}
        </div>
        <div className="text-sm h-10 break-word text-center overflow-scroll">
          {desc}
        </div>
      </div>
    </>
  );
};

const BadgeCardSkeleton: React.FC = () => {
  return (
    <>
      <div className="aspect-square bg-gray-800 w-72 flex justify-center items-center rounded-xl p-5 border border-gray-700">
        <div className="text-gray-700 opacity-80">
          <HelpCircle size={100} />
        </div>
      </div>
    </>
  );
};

export { BadgeCardSkeleton };
export default BadgeCard;
