"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
import "./BlogEdit.scss";

function BlogEdit() {
  const [value, setValue] = useState<any>("**Hello world!!!**");
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
        />

        <textarea
          className="shadow appearance-none rounded-lg py-2 px-3 text-white bg-gray-800 text-xl font-bold leading-tight focus:outline-none focus:shadow-outline m-5"
          id="multiline-input"
          placeholder="Enter Description"
        ></textarea>
        <div className="flex mx-5">
          <button className="button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
