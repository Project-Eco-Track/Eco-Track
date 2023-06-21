import React from "react";
import hills from "./images/hills.jpg";
import trees from "./images/trees.jpg";
import galaxy from "./images/galaxy.jpg";
import leaf from "./images/leaf.jpg";
import Image from "next/image";

import "./Rows.scss";
const Rows: React.FC = () => {
  return (
    <>
      <div className="card grid grid-rows-4 gap-3">
        <div className="image-container">
          <div style={{ width: "100%" }}>
            <Image
              className="brightness-[0.7]"
              src={hills.src}
              alt=""
              width={800}
              height={600}
            />
          </div>

          <span className="image-text hover:backdrop-blur-sm transition duration-500">
            <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
              Carbon Track
            </div>
          </span>
        </div>
        <div className="image-container bg-green-500">
          <Image
            className="brightness-[0.7]"
            src={leaf.src}
            alt=""
            width={800}
            height={600}
          />
          <span className="image-text hover:backdrop-blur-sm transition duration-500">
            <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
              AI Analysis
            </div>
          </span>
        </div>
        <a  href="badges" className="image-container">
          <Image
            className="brightness-[0.7]"
            src={galaxy.src}
            alt=""
            width={800}
            height={600}
          />

          <span className="image-text hover:backdrop-blur-sm transition duration-500">
            <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
              Badges
            </div>
          </span>
        </a>
        <div className="image-container">
          <Image
            className="brightness-[0.7]"
            src={trees.src}
            alt=""
            width={800}
            height={600}
          />

          <span className="image-text hover:backdrop-blur-sm transition duration-500">
            <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
              Blog Zone
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Rows;
