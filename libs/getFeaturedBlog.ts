import getBlogPost from "@libs/getBlogPost";
const getFeaturedBlog = async (): Promise<Blogs> => {
  const data: Promise<BlogPost> = getBlogPost("1");
  return await data;
};

export default getFeaturedBlog;
