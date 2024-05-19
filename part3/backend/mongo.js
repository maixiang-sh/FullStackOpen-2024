// 引入 Mongoose 库
const mongoose = require("mongoose");

// 检查命令行参数是否包含密码
if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

// 从命令行参数中获取密码
const password = process.argv[2];

// 构建 MongoDB 连接字符串
const url = `mongodb+srv://maixiang:${password}@cluster0.kop4izs.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

// 设置 Mongoose 选项，禁用严格查询
mongoose.set("strictQuery", false);

// 连接到 MongoDB 数据库
mongoose.connect(url);

// 定义 Note Model 结构
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

// 创建 Note Model
const Note = mongoose.model("Note", noteSchema);

// // 创建一个新的 Note 实例
// const note = new Note({
//   content: "HTML is easy",
//   important: true,
// });

// // 保存 Note 实例到数据库，并在保存后关闭连接
// note.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
