const getBlogs = async () => {
  const url = process.env.GET_ALL_BLOGS_URL;
  const res = await fetch(`${url}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    return { blogs: null, error: "Something went wrong" };
  }
  return res.json();
};

export default getBlogs;
