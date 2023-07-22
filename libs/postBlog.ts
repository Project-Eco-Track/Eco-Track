// Type: Library
import { postRequest } from "./postRequest";

interface Props {
  title: string;
  content: string;
  description: string;
  image: string;
}

interface T extends Props {
  date: Date;
  time: number;
  // userID: string;
  // username: string;
}

const postBlog = async ({ title, content, description, image }: Props) => {
  const url = process.env.POST_BLOG_URL;
  const date = new Date();
  const time = date.getTime();
  const payload:T = { title, content, description, image, date, time }; //userID, username

  const res = await postRequest<T>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postBlog;
