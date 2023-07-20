"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@components/Blog/BlogCard";

interface Blog {
  BlogID: number;
  Author: string;
  Image_url: string;
  Title: string;
  Description: string;
  Date: string;
  Likes: number;
}

interface Props {
  filterData: string;
}

const FeedContent: React.FC<Props> = ({ filterData }) => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [filter, setFilter] = useState<string>("Top Picks");

  useEffect(() => {
    setFilter(filterData);
    console.log(filterData);
  }, [filterData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getBlogs?filter=" + filter);
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [filter]);

  const content = blogData.map((blog) => {
    return (
      <BlogCard
        key={blog.BlogID}
        id={`${blog.BlogID}`}
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
