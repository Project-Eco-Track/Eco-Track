"use client";
import React, { useState, useEffect } from "react";
import FeedContent from "./FeedContent";
import SearchBar from "../SearchBar";
const BlogFeed = () => {
  const [search, setSearch] = useState<string>("");
  let filter = "Top Picks";

  function handleSetFilter(data: string) {
    filter = data;
  }

  return (
    <div className="blog-wrapper">
      <SearchBar handleSetFilter={handleSetFilter} />
      <FeedContent filterData={filter} />
    </div>
  );
};

export default BlogFeed;
