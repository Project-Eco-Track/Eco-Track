import BlogPost from "@components/Blog/BlogPost";

type Params = {
  params: {
    id: string;
  };
};
const page = ({ params: { id } }: Params) => {
  return (
    <div className="text-white">
      <BlogPost id={id} />
    </div>
  );
};

export default page;
