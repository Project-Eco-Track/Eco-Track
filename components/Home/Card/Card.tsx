import React from "react";
import Link from "next/link";
import "./Card.scss";
import { ChevronRight } from "lucide-react";
const Card: React.FC = () => {
  return (
    <>
      <div className="card">
        <div className="grid grid-rows-[0.25fr,2fr,1.75fr] w-full h-full gap-2">
          <div className="flex p-5">
            <Link href="/about" className="w-full justify-between flex">
              Our Team
              <div>
                <ChevronRight />
              </div>
            </Link>
          </div>
          <div className="flex p-5 flex-col border-gray-500 justify-center border-b h-full gap-1">
            <div className="flex text-7xl sm:text-8xl justify-start items-center tracking-tight font-[600] underline-anim">
              <span className="underline-anim">EcoTrack</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-center items-center bg-gray-900 rounded-xl">
              <Link href="https://bit.ly/ecotrack-video">Video</Link>
            </div>
            <div className="flex justify-center items-center bg-gray-900  rounded-xl">
              <Link href="https://devpost.com/software/ecotrack-dtn732">
                Devpost
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
