import React from "react";
import Link from "next/link";
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
              className="brightness-[0.7] object-cover object-top"
              fill
              src={hills.src}
              alt=""
            />
          </div>

          <Link href="/track">
            <span className="image-text hover:backdrop-blur-sm transition duration-500 cursor-pointer">
              <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
                Carbon Track
              </div>
            </span>
          </Link>
        </div>
        <div className="image-container bg-green-500">
          <Image
            className="brightness-[0.7] object-cover object-top"
            fill
            src={leaf.src}
            alt=""
          />

          <Link href="track/statistics">
            <span className="image-text hover:backdrop-blur-sm transition duration-500 cursor-pointer">
              <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
                AI Analysis
              </div>
            </span>
          </Link>
        </div>
        <div className="image-container">
          <Image
            className="brightness-[0.7] object-cover object-top"
            fill
            src={galaxy.src}
            alt=""
          />

          <Link href="/badges">
            <span className="image-text hover:backdrop-blur-sm transition duration-500 cursor-pointer">
              <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
                Badges
              </div>
            </span>
          </Link>
        </div>
        <div className="image-container">
          <Image
            className="brightness-[0.7] object-cover object-top"
            fill
            src={trees.src}
            alt=""
          />

          <Link href="/blogs">
            <span className="image-text hover:backdrop-blur-sm transition duration-500 cursor-pointer">
              <div className="backdrop-blur-sm text-4xl font-[600] tracking-tight p-5 rounded-xl">
                Blog Zone
              </div>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Rows;
