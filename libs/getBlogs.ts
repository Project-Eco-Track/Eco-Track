const getBlogs = async () => {
  const res = await fetch(
    process.env.GET_ALL_BLOGS || "http://localhost:3001",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    return { blogs: null, error: "Something went wrong" };
  }
  console.log(res);
  return res.json();
};

export default getBlogs;
