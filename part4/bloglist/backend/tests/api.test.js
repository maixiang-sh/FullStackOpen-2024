const { test, after, beforeEach } = require("node:test");
const assert = require("node:assert");
const Blog = require("../models/blog");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const helper = require("./test_helper");

beforeEach(async () => {
  await Blog.deleteMany({});

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog);
    await blogObject.save();
  }
});

// 4.8 测试是否返回json
test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

// 4.8 测试返回的blog数量是否正确
test("there are two blogs", async () => {
  const response = await api.get("/api/blogs");
  const blog = response.body;

  assert.strictEqual(response.body.length, helper.initialBlogs.length);
});

// 4.9 测试唯一标识符是否是“id”
test("the unique identifier property is named id", async () => {
  const response = await api.get("/api/blogs");
  const blog = response.body[0];
  // 断言存在 blog.id 这个属性
  assert(blog.id);
  // 断言不存在 blog._id 这个属性
  assert(!blog._id);
});

// 4.10 是否成功创建新的博客文章
test("a valid blog can be added", async () => {
  const newBlog = {
    title: "test adding blog",
    author: "test author",
    url: "testadd.com",
    likes: 0,
  };

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const response = await api.get("/api/blogs");
  const titles = response.body.map((r) => r.title);

  assert.strictEqual(response.body.length, helper.initialBlogs.length + 1);
  assert(titles.includes("test adding blog"));
});

// 4.11* 测试未设置 likes 时，是否默认为 0
test("if the likes property is missing, it will default to the value 0", async () => {
  const newBlog = {
    title: "this blog is missing likes",
    author: "test author",
    url: "testnolikes.com",
  };

  const response = await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const createdBlog = response.body;
  assert.strictEqual(createdBlog.likes, 0);
});

// 4.12* 测试创建新 blog 时，如果缺少 title 或 url 时，返回 400 状态码
test("fails with status code 400 if title or url is missing", async () => {
  const newBlog = {
    author: "test author",
    likes: 5,
  };

  await api.post("/api/blogs").send(newBlog).expect(400);
});

after(async () => {
  await mongoose.connection.close();
});
