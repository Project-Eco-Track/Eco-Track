import React, { useState, useEffect } from "react";
import BlogCard from "@components/Blog/BlogCard";
import LoadingCard from "../LoadingBar/LoadingBar";

interface Blog {
  BlogID: number;
  Author: string;
  Image_url: string;
  Title: string;
  Description: string;
  Date: string;
  Likes: number;
  ReadingTime: number;
}

interface Props {
  filterData: string;
}

const FeedContent: React.FC<Props> = ({ filterData }) => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("Recommended");

  useEffect(() => {
    setFilter(filterData);
    console.log(filterData);
  }, [filterData]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch("/api/getBlogs?filter=" + filter);
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false); // Set loading to false after fetching and setting data
    };
    fetchData();
  }, [filter]);

  const content = blogData.map((blog) => {
    return (
      <BlogCard
        key={blog.BlogID}
        id={`${blog.BlogID}`}
        author={blog.Author}
        src={blog.Image_url}
        title={blog.Title}
        description={blog.Description}
        date={blog.Date}
        likes={blog.Likes}
        ReadingTime={blog.ReadingTime}
      />
    );
  });

  return (
    <div className="blog-content">
      {isLoading ? (
        <>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </>
      ) : (
        content
      )}
    </div>
  );
};

export default FeedContent;
