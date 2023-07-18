// Type: Library
interface Props {
    title: string;
    content: string;
    description: string;
  }
  const postBlog = async ({ title, content, description }: Props) => {
    const url = process.env.POST_BLOG_URL;
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, description }),
    });
    if (!res.ok) {
      return { blogs: null, error: "Something went wrong" };
    }
    return res.json();
  };
  
  export default postBlog;