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
  userID,
  username,
  image,
}: Props) => {
  const url = "http://localhost:3001/post/blog";
  const date = new Date();
  const time = date.getTime();

  const imageURL = await postRequest<{ name: string; image: string }>(
    "/api/uploadImage",
    { name: userID, image: image }
  );

  console.log(image);

  const payload: T = {
    title,
    content,
    description,
    date,
    time,
    userID,
    username,
    image: imageURL,
  };

  const res = await postRequest<T>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postBlog;
