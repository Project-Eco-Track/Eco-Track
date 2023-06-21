import React from "react";
import Blog from "@components/Blog";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
        <Blog />
      </Suspense>
    </div>
  );
};

export default page;
