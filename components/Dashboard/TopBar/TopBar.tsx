import React from "react";
import "./TopBar.scss";
import ProgressBar from "./ProgressBar";
import { HelpCircle, TreePine } from "lucide-react";

const TopBar: React.FC = () => {
  return (
    <div className="flex w-fit flex-wrap">
      <div className="bg-gray-800 rounded-xl rounded-r-none w-72 md:w-80 lg:w-96 flex flex-col gap-3 p-4">
        <div className="w-full font-medium text-sm flex items-center gap-1">
          Overall Adoption <HelpCircle size={15} />
        </div>
        <div className="text-4xl font-semibold">500</div>
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex w-full justify-between">
            <div className="text-xs">100 users</div>
            <div className="text-xs">1,000 uses</div>
          </div>
          <div className="flex gap-3">
            🌳
            <div className="flex flex-1 items-center">
              <ProgressBar size={75} />
            </div>
            <div>🌴</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 h-full flex items-center">
        <div className="bg-gray-600 h-[75%] w-[4px] rounded-xl"></div>
      </div>
      <div className="bg-gray-800 rounded-xl rounded-l-none w-72 md:w-80 lg:w-96 flex flex-col gap-3 p-4">
        <div className="w-full font-medium text-sm flex items-center gap-1">
          Overall Efforts <HelpCircle size={15} />
        </div>
        <div className="text-4xl font-semibold">5,000</div>
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex w-full justify-between">
            <div className="text-xs">2,000 Pieces</div>
            <div className="text-xs">3,000 Pieces</div>
          </div>
          <div className="flex gap-3">
            👝
            <div className="flex flex-1 items-center">
              <ProgressBar size={90} />
            </div>
            <div>🗑️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
