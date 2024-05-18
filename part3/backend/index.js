// 导入 Express 框架
const express = require("express");
// 中间件，解决同源策略问题
const cors = require("cors");
// 中间件，记录请求日志
const morgan = require("morgan");

// 创建 Express 应用实例
const app = express();

// 使用 cors 中间件允许来自所有来源的请求
app.use(cors());
// 解析请求体中的 json
app.use(express.json());
// 记录请求日志
morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// 处理根 URL 的 GET 请求，返回一个简单的 HTML 格式的响应
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>"); // 发送响应到客户端
});

// 处理 GET 请求至 "/api/notes"，返回 'notes' 数组的 JSON 表示形式
app.get("/api/notes", (request, response) => {
  response.json(notes); // 将 'notes' 数组以 JSON 格式发送给客户端
});

// 冒号语法来定义 Express 中的路由参数，:id 即代表任何字符串。
// id 的值可以通过 request.params.id 获取
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  // 如果找到了 note，则返回 note，否则响应状态 404。 不带参数的 end() 表示不发送任何数据
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

// 删除资源的路由
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  // 状态码 204 表示 “No Content”，即 “无内容”。
  // 这是一个 HTTP 响应状态码，用于指示服务器成功处理了请求，但不返回任何内容。
  // 在以下场景中通常会使用状态码 204：
  // 1. 更新操作 2. 删除操作 3. 提交表单或发送数据
  response.status(204).end();
});

// 定义一个函数用于生成新笔记的唯一 ID
const generateId = () => {
  // 如果笔记数组不为空，则找到当前最大的 ID 值，否则设为 0
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  // 返回最大 ID 加一，确保 ID 唯一性
  return maxId + 1;
};

// 处理 POST 请求，向服务器添加新的笔记
app.post("/api/notes", (request, response) => {
  const body = request.body; // 获取请求的主体内容

  // 检查请求的内容中是否包含 'content' 字段，如果没有则返回 400 状态码和错误信息
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  // 创建一个新笔记对象，包含内容、重要性标志和一个新的唯一 ID
  const note = {
    content: body.content, // 笔记内容
    important: Boolean(body.important) || false, // 将 'important' 字段转换为布尔值，如果不存在则默认为 false
    id: generateId(), // 调用 generateId 函数生成新的 ID
  };

  // 将新创建的笔记添加到笔记数组
  notes = notes.concat(note);

  // 将新添加的笔记作为响应返回
  response.json(note);
});

// 定义服务器监听的端口号
const PORT = process.env.PORT || 3001
// 启动服务器，并在成功监听指定端口后在控制台输出信息
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
