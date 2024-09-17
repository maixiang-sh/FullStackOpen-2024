const User = require("../models/user");
const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "diu diu blog",
    author: "diu diu",
    url: "diudiu.com",
    likes: 0,
    userId: "66e9185422aa2bcd6836cff1"
  },
  {
    title: "xiao 2 blog",
    author: "xiao 2 blog",
    url: "xiao2.com",
    likes: 2,
    userId: "66e9185422aa2bcd6836cff1"
  },
];

const nonExistingId = async () => {
  const blog = new Blog({
    title: "null",
    author: "null",
    url: "null",
    likes: 0,
    userId: "66e9185422aa2bcd6836cff1"
  });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const initialUsers = [
  {
    username: "diu diu blog",
    name: "diu diu",
    passwordHash: "diudiu.com",
  },
];

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
}

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  initialUsers,
  usersInDb
};
