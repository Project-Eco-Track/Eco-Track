import React from "react";
import hills from "./images/hills.jpg";
import trees from "./images/trees.jpg";
import galaxy from "./images/galaxy.jpg";
import leaf from "./images/leaf.jpg";
import "./Rows.scss";
const Rows: React.FC = () => {
  return (
    <>
      <div className="card grid grid-rows-4 gap-3">
        <div className="image-container">
          <img className="brightness-[0.7]" src={hills.src} alt="" />
          <span className="image-text hover:backdrop-blur-sm transition duration-500">
          <div className="backdrop-blur-sm text-3xl font-[450] tracking-tight p-5 rounded-xl">
           My Carbon Footprint
            </div>
          </span>
        </div>
        <div className="image-container bg-green-500">
          <img className="brightness-[0.7]" src={leaf.src} alt="" />
          <span className="image-text hover:backdrop-blur-sm transition duration-500">
          <div className="backdrop-blur-sm text-3xl font-[450] tracking-tight p-5 rounded-xl">
            AI Analysis
            </div>
          </span>
        </div>
        <div className="image-container">
          <img className="brightness-[0.7]" src={galaxy.src} alt="" />
          <span className="image-text hover:backdrop-blur-sm transition duration-500">
          <div className="backdrop-blur-sm text-3xl font-[450] tracking-tight p-5 rounded-xl">
            Badges
            </div>
          </span>
        </div>
        <div className="image-container">
          <img className="brightness-[0.7]" src={trees.src} alt="" />
          <span className="image-text hover:backdrop-blur-sm transition duration-500">
            <div className="backdrop-blur-sm text-3xl font-[450] tracking-tight p-5 rounded-xl">
            Blog Zone
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Rows;
