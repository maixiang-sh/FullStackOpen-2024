## Part 1

Vite 是一种前端构建工具
Vite 支持多种模板预设，如：vanilla、react、vue等


```
# 使用 react 模板创建项目 Part1（npm 7+）
npm create vite@latest part1 -- --template react
npm create vite@latest courseinfo -- --template react
npm create vite@latest unicafe -- --template react
npm create vite@latest anecdotes -- --template react
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
通常在 JSX 模板中定义事件处理程序并不是一个好主意。
```js
<button onClick={() => setCounter(counter + 1)}> 
  plus
</button>
```

## props
在项目文件 .eslintrc.cjs 的 `rlus` 中添加 `'react/prop-types': 0` 可以消除`'***' is missing in props validation eslint(...)`的错误警告

Pro-tip: you may run into issues when it comes to the structure of the props that components receive. A good way to make things more clear is by printing the props to the console, e.g. as follows:
专业提示：当涉及到组件接收的 props 的结构时，您可能会遇到问题。让事情变得更清楚的一个好方法是将道具打印到控制台，例如如下：
```js
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
```

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


## Node.js
Node.js 是一个基于 Google Chrome V8 JavaScript 引擎的 JavaScript 运行时环境，几乎可以在任何地方运行 - 从服务器到手机。


## JavaScript
### Variables 变量
`const` const 用于声明块作用域的局部常量。
`let` let 用于声明可重新赋值的块级作用域局部变量
`var` var 用于声明一个函数作用域或全局作用域的变量

### Arrays 数组
```js
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})  
```


使用 React 时，经常使用函数式编程技术。函数式编程范式的特征之一是使用不可变的数据结构。在 React 代码中，最好使用 concat 方法，该方法使用添加的项目创建一个新数组。这确保了原始数组保持不变。

> **push()** 主要用于向原数组末尾添加新元素，并且会修改原数组。
> **concat()** 用于合并多个数组，创建一个新数组，并且不修改原数组。

```js
const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

```

**map()** 会返回一个新数组
```js
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

**解构赋值**
[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```


## 函数
定义函数的几种方法
1. 箭头函数
```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```
2. 函数声明
```js
function product(a, b) {
  return a * b
}
```
3. 函数表达式
```js
const average = function(a, b) {
  return (a + b) / 2
}
```



## this
this 指的是对象本身。
```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed
```

创建对象之后也可以将方法分配给对象：
给 arto 分配了一个 growOlder 方法，对象自身 age += 1
```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
```


当通过引用调用方法时，this 的值就变成了所谓的全局对象，最终的结果往往不是软件开发人员最初想要的。

如前所述，JavaScript 中 this 的值是根据方法的调用方式定义的。当 setTimeout 调用该方法时，实际上是 JavaScript 引擎调用该方法，此时 this 引用了全局对象:
```js
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto.greet, 1000)
```

有多种机制可以保存原始的 this。其中之一是使用称为绑定的方法：
调用 `arto.greet.bind(arto)` 创建一个新函数，其中 this 绑定指向 Arto，与调用该方法的位置和方式无关。
```js
setTimeout(arto.greet.bind(arto), 1000)
```



## Class
```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()

```


## Component helper functions
## 组件辅助函数
在 JavaScript 中，在函数中定义函数是一种常用的技术。

```js
const Hello = (props) => {
  //  bornYear 函数直接返回计算好的出生年份
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

```


## useState
React 自己的官方教程建议：“在 React 中，通常使用 onSomething 名称作为 props，这些 props 采用处理事件的函数，并使用 handleSomething 来处理处理这些事件的实际函数定义。”
```js
const handleSomething = () => setCounter(counter - 1)

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
```

React 中禁止直接改变状态，因为这可能会导致意想不到的副作用。更改状态必须始终通过将状态设置为新对象来完成。如果先前状态对象的属性未更改，则只需复制它们，这是通过将这些属性复制到新对象并将其设置为新状态来完成的。

Update of the state is asynchronous
状态更新是异步的

hooks 钩子只能从定义 React 组件的函数体内部调用：
```js
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```


返回函数的函数可用于定义可以使用参数自定义的通用功能。创建事件处理程序的 hello 函数可以被视为一个工厂，它生成用于问候用户的自定义事件处理程序。
```js
const hello = (who) => {
  return () => {
    console.log('hello', who)
  }
}
```


Do Not Define Components Within Components
不要在组件内定义组件
最大的问题是因为 React 在每次渲染中都会将另一个组件内部定义的组件视为新组件。这使得 React 无法优化组件。


## Map
列表项，即由 map 方法生成的元素，每个都必须有一个唯一的键值：一个称为 key 的属性。
React 使用数组中对象的关键属性来确定当组件重新渲染时如何更新组件生成的视图。有关此内容的更多信息，请参阅 [React 文档](https://react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key)。


```js
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}
```