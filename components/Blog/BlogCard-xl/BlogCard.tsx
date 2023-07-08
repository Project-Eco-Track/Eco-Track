import React from "react";
import "./BlogCard.scss";


const BlogCardXL = async ({
  BlogID,
  Author,
  Image_url,
  Title,
  Description,
  Likes,
  Date,
}: Blogs) => {
  return (
    <div className="featured-card cursor-pointer">
      <div className="container">
        <img src={Image_url}></img>
        <div className="blog-details">
          <h1>{Title}</h1>
          <div className="text px-5">{Description}</div>
          <div className="flex w-full justify-evenly font-bold mt-7">
            <p>
              <i className="fa-solid fa-at mx-2"></i>
              {Author}
            </p>
            <p>
              <i className="fa-brands fa-readme mx-2"></i>2 min
            </p>
            <p>
              <i className="fa-solid fa-calendar-days mx-2"></i>
              {Date}
            </p>
            <p>
              <i className="fa-solid fa-heart mx-2"></i>
              {Likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardXL;
