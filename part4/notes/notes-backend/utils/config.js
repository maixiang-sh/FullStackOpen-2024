require("dotenv").config();

const PORT = process.env.PORT

// 如果 环境 是 测试，则使用 测试数据库URL，否则使用生产环境URL
const MONGODB_URI = process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
};
