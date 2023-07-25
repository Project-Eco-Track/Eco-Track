import { NextResponse } from "next/server";
import upload from "@libs/imagekitCloud";

export async function GET(request: Request) {
  const queryParams = new URL(request.url).searchParams;
  const name: string = queryParams.get("name") || "default";
  const image: string =
    queryParams.get("image") ||
    "https://www.jasminz.com/image/cache/catalog/basel-demo/blog-1140x700.png";

  try {
    const res = await upload(image, name);
    console.log(res);
    return NextResponse.json({ url: res });
  } catch (error: any) {
    console.error("Error uploading image:", error.message);
    return NextResponse.json("Something went wrong.",{status: 500});
  }
}
