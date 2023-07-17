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
      <Link href="/blogs/posts/1">
        <BlogCard
          BlogID={BlogID}
          Author={Author}
          Image_url="https://images.pexels.com/photos/288093/pexels-photo-288093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
