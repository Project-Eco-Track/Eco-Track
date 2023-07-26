import React from "react";
import "./Header.scss";
import BlogCard from "./BlogCard";
import Link from "next/link";
import getFeaturedBlog from "@libs/getFeaturedBlog";

const Header: React.FC = async () => {
  const data: Blogs = await getFeaturedBlog();
  const { BlogID, Author, Image_url, Title, Description, Likes, Date } = data;
  return (
    <div className="slider text-white font-bold">
      <Link href={`/blogs/posts/${BlogID}`}>
        <BlogCard
          BlogID={BlogID}
          Author={Author}
          Image_url={Image_url}
          Title={Title}
          Description={Description}
          Likes={Likes}
          Date={Date}
        />
      </Link>
    </div>
  );
};

export default Header;
