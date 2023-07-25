"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

import "./BlogEdit.scss";
import postBlog from "@libs/postBlog";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function BlogEdit() {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isSignedIn, user, isLoaded } = useUser();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (isSignedIn && isLoaded) {
      postBlog({
        title: title,
        description: description,
        content: value,
        image: image,
        userID: user.id,
        username: user.fullName,
      });
    }
  };

  return (
    <div data-color-mode="dark" className="editor-container">
      <MDEditor
        height={700}
        value={value}
        onChange={setValue}
        className="rounded-md border-0"
      />

      <div className="flex flex-col justify-center align-middle m-5 p-5 bg-neutral-900 rounded-2xl">
        <form
          className="flex justify-center align-middle flex-col"
          onSubmit={handleSubmit}
        >
          <label className="text-white text-2xl font-bold ml-5">Title</label>
          <input
            className="shadow appearance-none py-2 px-3 text-white bg-transparent border-b-2 text-xl font-bold leading-tight focus:outline-none focus:shadow-outline m-5 mt-2"
            id="text-input"
            type="text"
            placeholder="Enter Title"
            // required
            onChange={handleTitleChange}
          />

          <label className="text-white text-2xl font-bold ml-5 mt-6">
            Description
          </label>
          <textarea
            className="shadow appearance-none py-2 px-3 text-white bg-transparent border-b-2 text-xl font-bold leading-tight focus:outline-none focus:shadow-outline m-5 mt-2"
            id="multiline-input"
            placeholder="Enter Description"
            onChange={handleDescriptionChange}
            // required
          ></textarea>

          <label className="text-white text-2xl font-bold ml-5 mt-6">
            Cover image
          </label>
          <input
            className="shadow appearance-none py-2 px-3 text-white bg-transparent border-b-2 text-xl font-bold leading-tight focus:outline-none focus:shadow-outline h-16 m-5"
            type="file"
            accept="image/*"
            placeholder="Upload Image"
            // required
            onChange={handleImageChange}
          />
          <div className="flex mx-5">
            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogEdit;
