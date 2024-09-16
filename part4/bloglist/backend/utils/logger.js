const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(...params);
  }
};

const error = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    console.error(...params);
  }
};

module.exports = {
  info,
  error,
};

// logger 有两个函数：
// 1. info 用于打印正常日志信息
// 2. error 用于打印所有错误信息。
