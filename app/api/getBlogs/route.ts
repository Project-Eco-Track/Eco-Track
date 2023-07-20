import { NextResponse } from "next/server";
import getBlogs from "@libs/getBlogs";

export async function GET(request: Request) {
  const queryParams = new URL(request.url).searchParams;
  const filterby = queryParams.get("filter");
  const blogs = await getBlogs(`${filterby}`);
  return NextResponse.json(blogs);
}
