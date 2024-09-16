const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "diu diu blog",
    author: "diu diu",
    url: "diudiu.com",
    likes: 0,
  },
  {
    title: "xiao 2 blog",
    author: "xiao 2 blog",
    url: "xiao2.com",
    likes: 2,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({
    title: "null",
    author: "null",
    url: "null",
    likes: 0,
  });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
