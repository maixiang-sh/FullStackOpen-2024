const bcrypt = require("bcrypt");
const usersRouter = require("express").Router(); // 创建一个 Express 路由器实例
const User = require("../models/user");

// 新增用户
usersRouter.post("/", async (request, response) => {
  // 从请求体中解构出用户名、姓名和密码
  const { username, name, password } = request.body;

  // 设置 bcrypt 的加密强度
  const saltRounds = 10;
  // 使用 bcrypt 对密码进行哈希处理
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // 创建新的用户对象
  const user = new User({
    username,
    name,
    passwordHash,
  });

  // 将用户保存到数据库
  const savedUser = await user.save();
  // 返回保存成功的用户信息，状态码 201 表示创建成功
  response.status(201).json(savedUser);

  usersRouter.get("/", async (request, response) => {
    const users = await User.find({});
    response.json(users);
  });
});

// 返回所有用户
usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate('notes', { content: 1, important: 1 });

  response.json(users);
});

// Note:
// 在MongoDB中, 文档可以引用其他集合中的文档。
// 默认情况下,当你查询一个文档时, 这些引用字段只包含被引用文档的ID。
// populate 允许你自动替换这些ID, 填充实际的文档内容。

module.exports = usersRouter;
