## Part 1

Vite 是一种前端构建工具
Vite 支持多种模板预设，如：vanilla、react、vue等


```
# 使用 react 模板创建项目 Part1（npm 7+）
npm create vite@latest part1 -- --template react
```

```
# 进入项目目录，并安装依赖
cd part1
npm install
```
npm install 是 npm 包管理器中的一个命令，用于安装指定的依赖包。

```
# 启动应用程序
npm run dev
```

控制台显示应用程序已在本地主机端口 5173 上启动，即地址 http://localhost:5173/
```
> part1@0.0.0 dev
> vite


  VITE v5.2.11  ready in 120 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```


## Rule
The first rule of frontend web development:
Web前端开发的第一条规则：

keep the console open all the time
保持控制台始终打开


## export default App
export default 是 JavaScript 中用于导出单个值、函数、对象或类的语法。通过使用 export default，可以将一个模块中的特定内容标记为默认导出项，使得其他模块在引入该模块时可以直接使用该默认导出项，而不需要使用具体的名称。

## JSX
JSX 并不是 HTML，在底层，React 组件返回的 JSX 被编译成 JavaScript。
编译由 Babel 处理。使用 create-react-app 或 vite 创建的项目配置为自动编译。
JSX 是 "XML-like",每个标签都需要关闭。
HTML 中换行可以这样写：<br>，但是JSX中必须关闭 <br />

## props: passing data to components
在项目文件 .eslintrc.cjs 的 `rlus` 中添加 `'react/prop-types': 0` 可以消除`'***' is missing in props validation eslint(...)`的错误警告


## ESLint


## Some notes
1. The console should always be open / 控制台应该始终打开
2. 可以使用 `console.log()` 打印到控制台进行调试
3. React 组件名称的首字母必须大写
4. React 组件的 return 的内容（通常）需要包含一个根元素，例如`<div> </div>`或者是空元素`<> </>`（使用空元素的话，不会出现在HTML代码中）
```js
# 类似这样只有三个同级元素，而没有放在一个根元素里是不行的
const App = () => {
  return (
    <h1>Greetings</h1>
    <Hello name='Maya' age={26 + 10} />
    <Footer />
  )
}
```
```js
使用根元素并不是唯一的可行选择。组件数组也是一个有效的解决方案，但这样看起来有点难看：
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}
``` 


## Do not render objects
In React, the individual things rendered in braces must be primitive values, such as numbers or strings.
在 React 中，大括号中呈现的各个事物必须是原始值，例如数字或字符串。不能是对象
如果数组包含符合渲染条件的值（例如数字或字符串），React 还允许渲染数组。但是是一个数组拼接后的值


## Git
git add xxx
git status
git commit -m 'xxxx'
git push -u origin main