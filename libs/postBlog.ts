// Type: Library
import { postRequest } from "./postRequest";

interface Props {
  title: string;
  content: string;
  description: string;
  image: string;
  userID: string;
  username: any;
}

interface T extends Props {
  date: Date;
  time: number;
}

const postBlog = async ({
  title,
  content,
  description,
  image,
  userID,
  username,
}: Props) => {
  const url = "http://localhost:3001/post/blog";
  const date = new Date();
  const time = date.getTime();

  const payload: T = {
    title,
    content,
    description,
    image,
    date,
    time,
    userID,
    username,
  };

  const res = await postRequest<T>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postBlog;
