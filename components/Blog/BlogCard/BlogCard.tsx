import React from "react";
import "./BlogCard.scss";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<Props> = ({ src, title, description }) => {
  return (
    <div className="card">
      <Image
        className="brightness-[0.7]"
        src={src}
        alt={title}
        width={800}
        height={600}
      />
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
