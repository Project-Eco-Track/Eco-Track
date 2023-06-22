import { getBlogPost } from "@libs/getBlogPost";
import "./BlogPost.scss";
import "./md-styles.scss";

interface Props {
  id: string;
}
const BlogPost: React.FC<Props> = ({ id }) => {
    const data = getBlogPost();
  return (
    <div className="post-container font-sans text-lg ">
      <div className="post-header">
        <h1 className="text-white text-6xl font-[600] mx-2">
          Reducing Carbon Footprint: Small Steps Towards a Sustainable Future
        </h1>
        <div className="text-white flex">
          <h2 className="font-[600] mx-2 mt-5 ">Akshay Vs </h2>
          <h3 className="font-[600] mx-2 mt-5 ">June 21, 2023</h3>
        </div>
        <img
          src="https://images.pexels.com/photos/929382/pexels-photo-929382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="blogpost"
        />
      </div>
      <article className="blog-content md-styles">
      <section dangerouslySetInnerHTML={{ __html: data }} />
      </article>
    </div>
  );
};

export default BlogPost;
