const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  // 从数据库中搜索用户
  const user = await User.findOne({ username });
  // 检查密码
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };
  // 如果密码正确，则使用 jwt.sign 方法创建令牌
  // 令牌的有效期为 60*60 秒，即一小时后
  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });
  // 该令牌已使用环境变量 SECRET 中的字符串作为秘密进行数字签名。
  // 数字签名确保只有知道秘密的各方才能生成有效的令牌。
  // 环境变量的值必须在 .env 文件中设置。

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;
