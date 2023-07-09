"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
import './BlogEdit.scss';

function BlogEdit() {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  return (
    <div data-color-mode="dark" className="editor-container">
      <MDEditor
        height={window.innerHeight-50}
        value={value}
        onChange={setValue}
        className="rounded-md border-0"
      />
    </div>
  );
}

export default BlogEdit;
