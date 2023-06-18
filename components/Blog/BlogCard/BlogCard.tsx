import React from "react";
import "./BlogCard.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  author: string;
  src: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<Props> = ({ id, author, src, title, description }) => {
  const url: string = `/blogs/@${author}/${title}?id=${id}`;
  return (
    <Link href={url.replace(/ /g, "-")} className="card">
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
    </Link>
  );
};

export default BlogCard;
