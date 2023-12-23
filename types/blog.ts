type Author = {
  name: string;
  image?: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  href: string;
  tags: string[];
  publishDate: string;
};
