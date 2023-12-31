import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import "./motion.scss";

const NewBlog = () => {
  return (
    <Link
      href="/blogs/editor"
      className="rounded-full w-16 h-16 bg-zinc-100 overflow-hidden fixed bottom-8 right-8 flex justify-center align-middle z-50 opacity-70 "
    >
      <FontAwesomeIcon
        icon={faCirclePlus}
        className="m-3 hover:m-2 transition-all duration-200 ease-in-out motion"
      />
    </Link>
  );
};

export default NewBlog;
