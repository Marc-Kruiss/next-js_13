interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Author extends Base {
  name: string;
  image: Image;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface Post extends Base {
  title: string;
  description: string;
  mainImage: Image;
  publishedAt: string;
  slug: Slug;
  author: Author;
  categories: Category[];
  body: Block[];
}
