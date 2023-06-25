const getBlogPost = async (id: string): Promise<BlogPost> => {
  const url = process.env.GET_ALL_BLOGS || "http://localhost:3001/blog";
  const res:Response = await fetch(`${url}/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  

  const data: BlogPost = await res.json();
  return data;;
};

export default getBlogPost;
