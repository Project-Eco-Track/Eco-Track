import { NextPage } from "next";
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header";
import "./Blog.scss";
import NewBlog from "./NewBlog";
import BlogFeed from "./BlogFeed";
import { Suspense } from "react";

const Home: NextPage = async () => {
  return (
    <div className="blog-container">
      <Header />
      <div className="blog-wrapper">
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <BlogFeed />
        </Suspense>
      </div>
      <NewBlog />
    </div>
  );
};

export default Home;
