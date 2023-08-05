"use client";
import React, { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import "./AwardBadge.scss";

const AwardBadge = () => {
  const domEl = useRef(null);
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    const convertToJpg = async () => {
      try {
        if (domEl.current) {
          const dataUrl = await htmlToImage.toJpeg(domEl.current);
          setDataUrl(dataUrl);
          console.log("Conversion to JPG completed successfully!");
        }
      } catch (error) {
        console.error("Error converting HTML to JPG:", error);
      }
    };

    convertToJpg();
  }, []);

  const download = () => {
    const link = document.createElement("a");
    link.download = "html-to-img.jpg";
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <div className="snip-wrapper" ref={domEl}>
        <div className="snip1331">
          <h1>Eco-Tracker</h1>
          <h5>Carbon Footprint</h5>
          <h6>3.4 tons</h6>
        </div>
        <div className="snip1331">
          <h1>Eco-Blogger</h1>
          <h5>I write Eco blogs</h5>
          <h6>3 Blogs</h6>
        </div>
        <div className="snip1331">
          <h1>Sustain</h1>
          <h5>Towards carbon neutrality</h5>
          <h6>EcoTrack</h6>
        </div>
      </div>
      <div className="button mt-10" onClick={download}>
        <i className="fa-solid fa-download" /> &nbsp; Download Badge
      </div>
    </>
  );
};

export default AwardBadge;
