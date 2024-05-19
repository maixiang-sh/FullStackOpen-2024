require("dotenv").config();
// 导入 Express 框架
const express = require("express");
// 中间件，解决同源策略问题
const cors = require("cors");
// 中间件，记录请求日志
const morgan = require("morgan");
// 导入 mongoose.model
const Note = require("./models/note");

// 创建 Express 应用实例
const app = express();

// 解析请求体中的 json
app.use(express.json());
//每当 Express 收到 HTTP GET 请求时，它都会首先检查 dist 目录是否包含与请求地址对应的文件。
// 如果找到正确的文件，Express 将返回该文件。
app.use(express.static("dist"));
// 使用 cors 中间件允许来自所有来源的请求
app.use(cors());
// 记录请求日志
morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

// 处理根 URL 的 GET 请求，返回一个简单的 HTML 格式的响应
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>"); // 发送响应到客户端
});

// 处理 GET 请求至 "/api/notes"，返回 'notes' 数组的 JSON 表示形式
app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

// 冒号语法来定义 Express 中的路由参数，:id 即代表任何字符串。
// id 的值可以通过 request.params.id 获取
app.get("/api/notes/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

// 删除资源的路由
app.delete("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// // 定义一个函数用于生成新笔记的唯一 ID
// const generateId = () => {
//   // 如果笔记数组不为空，则找到当前最大的 ID 值，否则设为 0
//   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
//   // 返回最大 ID 加一，确保 ID 唯一性
//   return maxId + 1;
// };

app.put("/api/notes/:id", (request, response, next) => {
  const { content, important } = request.body;

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

// 处理 POST 请求，向服务器添加新的笔记
app.post("/api/notes", (request, response, next) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note
    .save()
    .then((savedNote) => {
      response.json(savedNote);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};
// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);

// 定义服务器监听的端口号
const PORT = process.env.PORT;
// 启动服务器，并在成功监听指定端口后在控制台输出信息
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
