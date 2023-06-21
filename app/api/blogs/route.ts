import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(
    "https://raw.githubusercontent.com/Akshay-Vs/resources/main/Json/blogs",
    {
        headers: {
            "Content-Type": "application/json"
        }
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
