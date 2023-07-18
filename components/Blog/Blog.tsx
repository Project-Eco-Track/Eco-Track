import { NextPage } from "next";
import axios from "axios";
import type { Metadata } from "next";

import BlogCard from "@components/Blog/BlogCard";
import getBlogs from "@libs/getBlogs";
import Header from "./Header";
import "./Blog.scss";
import NewBlog from "./NewBlog";

export const metadata: Metadata = {
  title: "EcoTrack: Blog",
};

const Home: NextPage = async () => {
  const blogData: Promise<Blogs[]> = getBlogs();
  const blogs = await blogData;

  const content = blogs.map((blog) => {
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
    <div className="blog-container">
      <Header />
      <div className="blog-wrapper">{content}</div>
      <NewBlog />
    </div>
  );
};

export default Home;
