import { NextPage } from "next";
import Header from "./Header";
import "./Blog.scss";
import NewBlog from "./NewBlog";
import BlogFeed from "./BlogFeed";
import { Suspense } from "react";

const Home: NextPage = async () => {
  return (
    <div className="blog-container">
      <Header />
      <Suspense fallback={<div className="h-screen text-white">Loading...</div>}>
        <BlogFeed />
      </Suspense>
      <NewBlog />
    </div>
  );
};

export default Home;
