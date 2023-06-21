import { NextPage } from "next";
import axios from "axios";
import type { Metadata } from "next";

import BlogCard from "@components/Blog/BlogCard";
import getBlogs from "@libs/getBlogs";
import Header from "./Header";
import "./Blog.scss";

export const metadata: Metadata = {
  title: "EcoTrack: Blog",
};

const Home: NextPage = async () => {
  const blogData: Promise<Blogs[]> = getBlogs();
  const blogs = await blogData;

  const content = blogs.map((blog) => {
    return (
      <BlogCard
        key={blog.id}
        id={blog.id}
        author={blog.author}
        src={blog.src}
        title={blog.title}
        description={blog.description}
      />
    );
  });

  return (
    <div className="blog-container">
      <Header />
      <div className="blog-wrapper">{content}</div>
    </div>
  );
};

export default Home;
