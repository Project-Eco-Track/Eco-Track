import { NextResponse } from "next/server";
import getBlogs from "@libs/getBlogs";

export async function GET(request: Request) {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}
