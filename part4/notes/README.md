```
├── index.js
├── app.js
├── dist
│   └── ...
├── controllers
│   └── notes.js
├── models
│   └── note.js
├── package-lock.json
├── package.json
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js  
```

logger.js 有两个函数：
1. info 用于打印正常日志信息
2. error 用于打印所有错误信息。

环境变量的处理被提取到一个单独的 utils/config.js 文件中