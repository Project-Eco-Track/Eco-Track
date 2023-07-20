"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@components/Blog/BlogCard";

interface Props {
  filterData: string;
}

const FeedContent = async ({ filterData }: Props) => {
  const [blogData, setBlogData] = useState<Blogs[]>([]);
  const [filter, setFilter] = useState<string>();

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

  return <div className="blog-content">{content}</div>;
};

export default FeedContent;
