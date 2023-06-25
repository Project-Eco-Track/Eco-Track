import getBlogPost from "@libs/getBlogPost";
import Link from "next/link";
import "./BlogPost.scss";
import "./md-styles.scss";

interface Props {
  id: string;
}

const BlogPost = async (props: Props) => {
  const data: Promise<BlogPost> = getBlogPost(props.id);
  const { BlogID, Author, Image_url, Title, Description, Content, Date } =
    await data;
  return (
    <div className="post-container font-sans text-lg ">
      <div className="post-header font-bold">
        <div className="mb-20">
          <Link href='/blogs' className="cursor-pointer underline">
            Blogs
          </Link>
          &nbsp;/&nbsp;{Title}
        </div>
        <h1 className="text-white text-6xl font-[600] mx-2">{Title}</h1>
        <div className="text-white flex">
          <h2 className="font-[600] mx-2 mt-5 ">{Author}</h2>
          <h3 className="font-[600] mx-2 mt-5 ">{Date}</h3>
        </div>
        <img src={Image_url} alt={Title}/>
      </div>
      <article className="blog-content md-styles">
        <section
          dangerouslySetInnerHTML={{ __html: `<div>${Content}</div>` }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
