import React from "react";
import "./BlogCard.scss";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
interface Props {
  id: string;
  author: string;
  src: string;
  title: string;
  description: string;
  date: string;
  likes: number;
}

const BlogCard: React.FC<Props> = ({
  id,
  author,
  src,
  title,
  description,
  date,
  likes,
}) => {
  const url: string = `/blogs/${id}`;
  return (
    <Link href={url.replace(/ /g, "-")} className="card">
      <Suspense fallback={<div>Loading...</div>}>
        <Image
          className="brightness-[0.7]"
          src={src}
          alt={title}
          width={800}
          height={600}
        />
        <div className="content">
          <h1>{title}</h1>
          <div className="overflow-hidden">
            <p>{description}</p>
            <div className="flex justify-evenly font-bold mt-4">
              <p>
                <i className="fa-solid fa-at mx-2"></i>
                {author}
              </p>
              <p>
                <i className="fa-brands fa-readme mx-2"></i>2 min
              </p>
              <p>
                <i className="fa-solid fa-calendar-days mx-2"></i>
                {date}
              </p>
              <p>
                <i className="fa-solid fa-heart mx-2"></i>
                {likes}
              </p>
            </div>
          </div>
        </div>
      </Suspense>
    </Link>
  );
};

export default BlogCard;
