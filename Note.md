## Part 1

Vite 是一种前端构建工具
Vite 支持多种模板预设，如：vanilla、react、vue等


```
# 使用 react 模板创建项目 Part1（npm 7+）
npm create vite@latest part1 -- --template react
npm create vite@latest courseinfo -- --template react
npm create vite@latest unicafe -- --template react
npm create vite@latest anecdotes -- --template react
npm create vite@latest notes-frontend -- --template react
npm create vite@latest phonebook -- --template react
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

```
  'react/prop-types': 0
```

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


## 如何访问表单输入元素中包含的数据？
### Controlled component 受控元件
[Controlled component](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

每次输入元素发生更改时都会调用事件处理程序。事件处理函数接收事件对象作为其事件参数：
```js
<input
  value={newNote}
  onChange={handleNoteChange}
/>
// ... 
const handleNoteChange = (event) => {
  // console.log(event.target.value)
  setNewNote(event.target.value)
}

```

## event.preventDefault()

event.preventDefault() 是一个 JavaScript 中常用的方法，用于阻止事件的默认行为。在上下文中，它是用来阻止表单提交的默认行为。

在表单中，当你点击提交按钮时，浏览器会尝试向服务器发送表单数据并刷新页面，这是表单的默认行为。但有时你可能希望在提交表单时执行一些其他的操作，而不是刷新页面。在这种情况下，你可以使用 event.preventDefault() 来阻止表单的默认提交行为，从而使你有机会执行自己的逻辑，比如对表单数据进行验证、处理数据等操作。


## Array.some()
```js
  // 检查名字是否已存在于 persons 中
  const nameAlreadyExists = (name) => {
    // Array.some() 用于检查数组中是否至少有一个元素符合条件
    return persons.some((person) => person.name == name);
  };

  ```


## Getting data from server 从服务器获取数据

### [JSON Server](https://github.com/typicode/json-server)
  使用 JSON Server 充当服务器

### XMLHttpRequest
XMLHttpRequest 获取数据，也称为使用 XHR 对象发出的 HTTP 请求。这是 1999 年引入的技术，现在每个浏览器都支持该技术很长一段时间了。
不再推荐使用 XHR，浏览器已经广泛支持 fetch 方法，该方法基于所谓的 Promise，而不是 XHR 使用的事件驱动模型。
目前，JavaScript 引擎是单线程的，这意味着它们无法并行执行代码。因此，实践中需要使用非阻塞模型来执行IO操作。否则，浏览器将在例如从服务器获取数据的过程中“冻结”。
JavaScript 引擎的单线程特性的另一个后果是，如果某些代码执行占用大量时间，浏览器将在执行期间卡住。

In today's browsers, it is possible to run parallelized code with the help of so-called web workers. The event loop of an individual browser window is, however, still only handled by a single thread.
在当今的浏览器中，可以在所谓的 [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) 的帮助下运行并行代码。然而，单个浏览器窗口的事件循环仍然仅由单个线程处理。

## npm
我们可以使用前面提到的基于 Promise 的函数 fetch 从服务器提取数据。 Fetch 是一个很棒的工具。它已标准化并受到所有现代浏览器（IE 除外）的支持。

如今，几乎所有 JavaScript 项目都是使用 Node 包管理器（又名 npm）定义的。使用Vite创建的项目也遵循npm格式。项目使用 npm 的一个明显标志是位于项目根目录的 package.json 文件：

**注意** npm-commands 应始终在项目根目录中运行，这是可以找到 package.json 文件的位置。

通过执行 command 将 json-server 安装为开发依赖项（仅在开发期间使用）：
```
npm install json-server --save-dev
```

在启动新的 json-server 之前，必须先终止之前启动的 json-server；否则就会出现麻烦：


## Promise
Promise 是一个代表异步操作的对象。一个 Promise 可以具有三种不同的状态：
1. pending，这意味着最终值（以下两个之一）尚不可用。
2. fulfilled，表示操作已经完成，并且可以得到最终的值，一般是操作成功。
3. rejected，这意味着错误阻止了最终值的确定，这通常代表操作失败。

如果并且当我们想要访问由 Promise 表示的操作的结果时，我们必须向 Promise 注册一个事件处理程序。这是使用以下方法实现的：
```js
const promise = axios.get('http://localhost:3000/notes')

promise.then(response => {
  console.log(response)
})

```
JavaScript 运行时环境调用 then 方法注册的回调函数，并为其提供响应对象作为参数。响应对象包含与 HTTP GET 请求响应相关的所有基本数据，其中包括返回的数据、状态代码和标头。

通常不需要将 Promise 对象存储在变量中，而是通常将 then 方法调用链接到 axios 方法调用，以便它直接跟随它：
```js
axios.get('http://localhost:3000/notes').then(response => {
  const notes = response.data
  console.log(notes)
})
```

格式化链式方法调用的一种更易读的方法是将每个调用放在自己的行上：
```js
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
```


## Effect-hooks
Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
Effects 允许组件连接到外部系统并与其同步。这包括处理网络、浏览器 DOM、动画、使用不同 UI 库编写的小部件以及其他非 React 代码。

因此，效果钩子正是从服务器获取数据时使用的正确工具。
默认情况下，Effect 会在每次完成渲染后运行，但您可以选择仅在某些值发生更改时才触发它。
useEffect 的第二个参数用于指定特效的运行频率。如果第二个参数是一个空数组[]，那么只有在第一次渲染组件时才会运行 Effect 。

```js
useEffect(setup, dependencies?)
```
**参数**
- setup：处理 Effect 的函数。setup 函数选择性返回一个 清理（cleanup） 函数。当组件被添加到 DOM 的时候，React 将运行 setup 函数。在每次依赖项变更重新渲染后，React 将首先使用旧值运行 cleanup 函数（如果你提供了该函数），然后使用新值运行 setup 函数。在组件从 DOM 中移除后，React 将最后一次运行 cleanup 函数。

- 可选 dependencies：setup 代码中引用的所有响应式值的列表。响应式值包括 props、state 以及所有直接在组件内部声明的变量和函数。如果你的代码检查工具 配置了 React，那么它将验证是否每个响应式值都被正确地指定为一个依赖项。依赖项列表的元素数量必须是固定的，并且必须像 [dep1, dep2, dep3] 这样内联编写。React 将使用 Object.is 来比较每个依赖项和它先前的值。如果省略此参数，则在每次重新渲染组件之后，将重新运行 Effect 函数。如果你想了解更多，请参见 传递依赖数组、空数组和不传递依赖项之间的区别。

**返回值**
`useEffect` 返回 `undefined`。


在 React 的 useEffect 钩子中，第二个参数是一个依赖项数组，它的作用非常关键。这个数组可以告诉 React useEffect 内的函数什么时候需要重新执行。具体来说，这个机制如下：

1. 无依赖项（不传递第二个参数）：
- 当你不传递第二个参数时，useEffect 中的函数会在组件的每次渲染后都执行。这类似于 componentDidMount 和 componentDidUpdate 的组合。
  

1. 空数组（[]）作为依赖项：
- 当依赖项数组为空时，useEffect 中的函数仅在组件挂载时执行一次，之后不再执行。这类似于类组件中的 componentDidMount 生命周期方法，适用于只需要运行一次的效果（如 API 调用、订阅等）。

3. 具有依赖项的数组：
- 当依赖项数组中包含一个或多个变量时，useEffect 中的函数将在组件挂载后以及这些依赖项发生变化时执行。这相当于类组件中的 componentDidUpdate，但它只在指定的依赖变化时运行，而不是所有的更新。这使得你可以精确控制 useEffect 的执行时机。
  
依赖项数组的正确使用非常重要，它可以帮助避免不必要的副作用执行，提升组件的性能。不正确的依赖项可能导致 bug，例如忽略更新依赖项可能导致使用了过时的状态或属性值。

下面是一个使用 useEffect 的示例：
```js
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);

    // 仅在count变化时执行
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // 依赖数组中包含count

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

```
在这个例子中，useEffect 函数依赖于 count 变量。只有 count 改变时，useEffect 才会重新执行，这样可以确保文档标题的更新仅在 count 变化时发生。



## REST
在 REST 术语中，我们将单个数据对象（例如应用程序中的 Notes ）称为资源。每个资源都有一个与其关联的唯一地址 - 它的 URL。根据 json-server 使用的一般约定，我们可以在资源 URL Notes/3 处找到单个注释，其中 3 是资源的 id。另一方面，注释 URL 将指向包含所有注释的资源集合。



## 将与后端的通信提取到单独的模块中
Extracting Communication with the Backend into a Separate Module

## promise chain