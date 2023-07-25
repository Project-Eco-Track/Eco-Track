import { NextResponse } from "next/server";
import upload from "@libs/imagekitCloud";

export async function POST(request: Request) {
  const data = await request.json();
  const { image, name } = data;
  try {
    const res = await upload(image, name);
    console.log(res);
    return NextResponse.json({ url: res });
  } catch (error: any) {
    console.error("Error uploading image:", error.message);
    return NextResponse.json("Something went wrong.", { status: 500 });
  }
}
