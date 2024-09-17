// 导入所需的模型
const Note = require("../models/note");
const User = require("../models/user");

// 定义初始的笔记数据，用于测试
const initialNotes = [
  {
    content: "HTML is easy",
    important: false,
  },
  {
    content: "Browser can execute only JavaScript",
    important: true,
  },
];

// 创建并返回一个不存在的笔记ID
const nonExistingId = async () => {
  const note = new Note({ content: "willremovethissoon" });
  await note.save();
  await note.deleteOne();
  return note._id.toString();
};

// 获取数据库中所有笔记
const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map((note) => note.toJSON());
};

// 获取数据库中所有用户
const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

// 导出这些函数和数据，以便在其他文件中使用
module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb,
};