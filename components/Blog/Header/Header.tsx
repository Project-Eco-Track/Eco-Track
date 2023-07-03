import React from "react";
import "./Header.scss";
import FeaturedBlogs from "./FeaturedBlogs";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="slider text-white font-bold">
      <Link href="/blogs/1">
        <FeaturedBlogs Img_url="https://images.pexels.com/photos/288093/pexels-photo-288093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Link>
    </div>
  );
};

export default Header;
