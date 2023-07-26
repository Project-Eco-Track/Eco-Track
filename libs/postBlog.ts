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
  date: string;
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
  const url = "https://sangria-swordfish-wrap.cyclic.app/post/blog";

  const date = new Date();
  const year = date.getFullYear().toString().slice(-2).padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const time = date.getTime();

  const imageURL = await postRequest<{ name: string; image: string }>(
    "/api/uploadImage",
    { name: userID, image: image }
  );

  const payload: T = {
    title,
    content,
    description,
    date: formattedDate,
    time,
    userID,
    username,
    image: imageURL,
  };

  const res = await postRequest<T>(`${url}`, payload);
  return JSON.stringify(res);
};

export default postBlog;
