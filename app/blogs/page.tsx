import React from "react";
import Blog from "@components/Blog";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>
    </div>
  );
};

export default page;
