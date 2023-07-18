"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import "./BlogEdit.scss";
import postBlog from "@libs/postBlog";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function BlogEdit() {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    postBlog({
      title: title,
      description: description,
      content: value,
    });
  };

  return (
    <div data-color-mode="dark" className="editor-container">
      <MDEditor
        height={700}
        value={value}
        onChange={setValue}
        className="rounded-md border-0"
      />

      <div className="flex flex-col justify-center align-middle m-5 p-5 ">
        <input
          className="shadow appearance-none rounded-lg py-2 px-3 text-white bg-gray-800 text-xl font-bold leading-tight focus:outline-none focus:shadow-outline h-16 m-5"
          id="text-input"
          type="text"
          placeholder="Enter Title"
          onChange={handleTitleChange}
        />

        <textarea
          className="shadow appearance-none rounded-lg py-2 px-3 text-white bg-gray-800 text-xl font-bold leading-tight focus:outline-none focus:shadow-outline m-5"
          id="multiline-input"
          placeholder="Enter Description"
          onChange={handleDescriptionChange}
        ></textarea>

        <div className="flex mx-5">
          <button className="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
