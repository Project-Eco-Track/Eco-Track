// Type: Library
const getBlogs = async (filterby: string) => {
  console.log("Filter BY: " + filterby);

  const url = new URL(
    `${process.env.GET_ALL_BLOGS_URL}?filter=${encodeURIComponent(filterby)}`,
  );
  const res = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    return { blogs: null, error: "Something went wrong from SSR" };
  }
  return res.json();
};

export default getBlogs;
