const getBlogs = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Akshay-Vs/resources/main/Json/blogs",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    return { blogs: null, error: "Something went wrong" };
  }
  return res.json();
};

export default getBlogs;
