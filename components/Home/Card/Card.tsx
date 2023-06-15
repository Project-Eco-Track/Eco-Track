import React from "react";
import "./Card.scss";
import { ChevronRight } from "lucide-react";
const Card: React.FC = () => {
  return (
    <>
      <div className="card">
        <div className="grid grid-rows-[0.25fr,2fr,1.75fr] w-full h-full gap-2">
          <div className="flex p-5">
            <div className="w-full justify-between flex">
              Our Team
              <div>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="flex p-5 flex-col border-gray-500 justify-center border-b h-full gap-1">
            <div className="flex text-6xl sm:text-8xl justify-start items-center tracking-tight font-[500]">
              EcoTrack
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center bg-gray-900 rounded-xl">
              Video
            </div>
            <div className="flex justify-center items-center bg-gray-900  rounded-xl">
              Devpost
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
