import { getBlogPost } from "@libs/getBlogPost";
import "./BlogPost.scss";
import "./md-styles.scss";

interface Props {
  id: string;
}

const BlogPost: React.FC<Props> = ({ id }) => {
  const data = getBlogPost(id);
  return (
    <div className="post-container font-sans text-lg ">
      <div className="post-header">
        <h1 className="text-white text-6xl font-[600] mx-2">{data.title}</h1>
        <div className="text-white flex">
          <h2 className="font-[600] mx-2 mt-5 ">{data.author}</h2>
          <h3 className="font-[600] mx-2 mt-5 ">{data.date}</h3>
        </div>
        <img src={data.image} alt={data.title} />
      </div>
      <article className="blog-content md-styles">
        <section dangerouslySetInnerHTML={{ __html: data.content }} />
      </article>
    </div>
  );
};

export default BlogPost;
