"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@components/Blog/BlogCard";
import SearchBar from "@components/Blog/SearchBar";

const BlogFeed = async () => {
  const [blogData, setBlogData] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("/api/getBlogs")
          .then((res) => res.json())
          .then((data) => {
            setBlogData(data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const content = blogData.map((blog) => {
    return (
      <BlogCard
        key={blog.BlogID}
        id={blog.BlogID}
        author={blog.Author}
        src={blog.Image_url}
        title={blog.Title}
        description={blog.Description}
        date={blog.Date}
        likes={blog.Likes}
      />
    );
  });

  return (
    <div className="blog-content">
      <SearchBar />
      {content}
    </div>
  );
};

export default BlogFeed;
