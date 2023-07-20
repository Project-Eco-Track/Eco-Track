import React from "react";
import BlogCard from "@components/Blog/BlogCard";
import getBlogs from "@libs/getBlogs";

const BlogFeed = async () => {
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

  return <div className="blog-content">{content}</div>;
};

export default BlogFeed;
