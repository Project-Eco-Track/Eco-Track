import axios from "axios";

const getBlogs = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/Akshay-Vs/resources/main/Json/blogs"
    );
    return res.data;
  };

export default getBlogs;
