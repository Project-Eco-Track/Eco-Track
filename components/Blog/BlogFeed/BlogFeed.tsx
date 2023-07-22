"use client";
import React, { useState, useEffect, useMemo } from "react";
import FeedContent from "./FeedContent";
import SearchBar from "../SearchBar";

const BlogFeed = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("Recommended");

  function handleSetFilter(data: string) {
    setFilter(data);
  }

  const memoizedFeedContent = useMemo(() => {
    return <FeedContent filterData={filter} />;
  }, [filter]);

  return (
    <div className="blog-wrapper">
      <SearchBar handleSetFilter={handleSetFilter} />
      {memoizedFeedContent}
    </div>
  );
};

export default BlogFeed;
