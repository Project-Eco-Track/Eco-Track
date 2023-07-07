import getBlogPost from "@libs/getBlogPost";
import Link from "next/link";
import "./BlogPost.scss";
import "./md-styles.scss";
import BlogCard from "../Header/BlogCard";

interface Props {
  id: string;
}

const BlogPost = async (props: Props) => {
  const data: Promise<BlogPost> = getBlogPost(props.id);
  const {
    BlogID,
    Author,
    Image_url,
    Title,
    Description,
    Content,
    Date,
    Likes,
  } = await data;
  return (
    <>
      <div className="card-container">
        <BlogCard
          BlogID={BlogID}
          Author={Author}
          Image_url={Image_url}
          Title={Title}
          Description={Description}
          Likes={Likes}
          Date={Date}
        />
      </div>

      <div className="post-container font-sans font-bold text-lg ">
        <div className="mt-20 text-start self-center mx-20">
          {Title} by {Author}
        </div>
        <article className="blog-content md-styles">
          <section
            dangerouslySetInnerHTML={{ __html: `<div>${Content}</div>` }}
          />
        </article>
      </div>
    </>
  );
};

export default BlogPost;
