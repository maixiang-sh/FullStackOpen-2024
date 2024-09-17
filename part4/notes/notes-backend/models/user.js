const mongoose = require("mongoose");

// 定义用户模式
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  passwordHash: String,
  notes: [
    {
      // 每个笔记都通过 ObjectId 引用 Note 模型
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});

// 定义 toJSON 方法，用于在将文档转换为 JSON 时自定义输出
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

// 创建 User 模型
const User = mongoose.model("User", userSchema);

// 导出 User 模型以供其他文件使用
module.exports = User;
