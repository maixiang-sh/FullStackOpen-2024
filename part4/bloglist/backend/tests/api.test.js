const { test, after, beforeEach, describe } = require("node:test");
const assert = require("node:assert");
const Blog = require("../models/blog");
const User = require("../models/user");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const helper = require("./test_helper");

describe("when there is initially some blogs saved", () => {
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
  describe("addition of a new note", () => {
    // 4.10 是否成功创建新的博客文章
    test("a valid blog can be added", async () => {
      const newBlog = {
        title: "test adding blog",
        author: "test author",
        url: "testadd.com",
        likes: 0,
      };

      const account = {
        username: "diu diu blog",
        passwordHash: "diudiu.com",
      };
      const user = await api
        .post("/api/login")
        .send(account)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
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
  });

  // 4.13 测试删除指定博客
  describe("deletion of a blog", () => {
    test("succeeds with status code 204 if id is valid", async () => {
      const response = await api.get("/api/blogs");
      const blogToDelete = response.body[0];

      await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

      const newblogs = await api.get("/api/blogs");
      assert.strictEqual(newblogs.body.length, helper.initialBlogs.length - 1);
    });
  });

  // 4.14 测试更新点赞数
  describe("update blog", () => {
    test("update likes count", async () => {
      const response = await api.get("/api/blogs");
      const blogToUpdate = response.body[0];

      const blog = {
        ...blogToUpdate,
        likes: blogToUpdate.likes + 1,
      };

      await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send(blog)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      const new_response = await api.get("/api/blogs");
      const updatedBlog = new_response.body[0];

      assert.strictEqual(updatedBlog.likes, helper.initialBlogs[0].likes + 1);
    });
  });

  // 4.16 测试新建账户
  describe("add new account", () => {
    beforeEach(async () => {
      await User.deleteMany({});

      for (let user of helper.initialUsers) {
        let userObject = new User(user);
        await userObject.save();
      }
    });

    test("successfully created a new account", async () => {
      const usersAtStart = await helper.usersInDb();

      const newUser = {
        username: "newUser",
        name: "new_user",
        password: "new12345",
      };

      await api
        .post("/api/users")
        .send(newUser)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const usersAtEnd = await helper.usersInDb();

      assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);

      const usernames = usersAtEnd.map((u) => u.username);
      assert(usernames.includes(newUser.username));
    });

    test("user already exists", async () => {
      const usersAtStart = await helper.usersInDb();

      const newUser = {
        username: usersAtStart[0].username,
        name: "xiaoxiao2",
        password: "xiao1213124",
      };

      const response = await api
        .post("/api/users")
        .send(newUser)
        .expect(400)
        .expect("Content-Type", /application\/json/);

      const usersAtEnd = await helper.usersInDb();
      assert.deepStrictEqual(usersAtStart, usersAtEnd);
    });

    test("username and password do not meet requirements", async () => {
      const newUser = {
        username: "a",
        name: "b",
        password: "c",
      };

      const response = await api
        .post("/api/users")
        .send(newUser)
        .expect(400)
        .expect("Content-Type", /application\/json/);

      assert(
        response.body.error.includes("must be at least 3 characters long")
      );
    });
  });
});

//  after 需要放在最后，否则会在测试结束前就关闭数据库连接，导致出现问题
after(async () => {
  await mongoose.connection.close();
});
