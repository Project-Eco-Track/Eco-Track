type Blogs = {
  id: string;
  author: string;
  src: string;
  title: string;
  description: string;
  //   date: string;
  //   category: string;
  //   views: number;
  //   tags: string[];
};

type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  image?: string;
  content: string;
};
