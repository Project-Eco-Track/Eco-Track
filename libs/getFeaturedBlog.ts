import getBlogPost from "@libs/getBlogPost";
const getFeaturedBlog = async (): Promise<Blogs> => {
  const data: Promise<BlogPost> = getBlogPost("360001");
  return await data;
};

export default getFeaturedBlog;
