"use client";
import React, { useState } from "react";
import "./SearchBar.scss";

interface Props {
  handleSetFilter: (data: string) => void;
}

const SearchBar = ({ handleSetFilter }: Props) => {
  const [selected, setSelected] = useState<string>("Top Picks");

  const handleFilter = (filter: string) => {
    setSelected(filter);
    handleSetFilter(filter);
  };

  return (
    <div className="searchbar">
      <div className="searchbar-container">
        <div className="searchbar-left">
          <div
            className={`button ${selected === "Top Picks" ? "selected" : ""}`}
            onClick={() => handleFilter("Top Picks")}
          >
            Top Picks
          </div>
          <div
            className={`button ${selected === "Recent" ? "selected" : ""}`}
            onClick={() => handleFilter("Recent")}
          >
            Recent
          </div>
          <div
            className={`button ${selected === "Popular" ? "selected" : ""}`}
            onClick={() => handleFilter("Popular")}
          >
            Popular
          </div>
          <div
            className={`button ${
              selected === "Eco Verified" ? "selected" : ""
            }`}
            onClick={() => handleFilter("Eco Verified")}
          >
            Eco Verified
          </div>
        </div>
        <div className="searchbar-right">
          <div className="searchbar-search">
            <input type="text" placeholder="Search for blogs" />
            <i className="fa-solid fa-magnifying-glass p-5 fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
