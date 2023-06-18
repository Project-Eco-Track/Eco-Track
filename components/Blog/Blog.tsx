"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

import BlogCard from "@components/Blog/BlogCard";
import Header from "./Header";
import "./Blog.scss";

interface  BlogData {
  id: string;
  author: string;
  src: string;
  title: string;
  description: string;
}

const Home: NextPage = () => {
  const [data, setData] = useState<BlogData[]>([]);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const { data } = await axios.get("/api/blogs");
    setData(data);
    console.log(data);
  };

  return (
    <div className="blog-container">
      <Header />
      <div className="blog-wrapper">
        {data.map((item, index) => (
          <BlogCard
            key={index}
            id={item.id}
            author={item.author}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
