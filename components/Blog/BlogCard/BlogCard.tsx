import React from "react";
import "./BlogCard.scss";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const BlogCard: React.FC<Blogs> = ({ id, author, src, title, description }) => {
  const url: string = `/blogs/@${author}/${title}/${id}`;
  return (
    <Link href={url.replace(/ /g, "-")} className="card">
      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
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
      </Suspense>
    </Link>
  );
};

export default BlogCard;
