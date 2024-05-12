# Exercises 1.1.-1.2

## 1.1: Course Information, step 1
The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.
我们将在本练习中开始处理的应用程序将在接下来的几个练习中进一步开发。在本课程的本练习和其他练习中，只需提交应用程序的最终状态即可。如果需要，您也可以为本系列的每个练习创建一个提交，但这完全是可选的。

Use Vite to initialize a new application. Modify main.jsx to match the following
使用 Vite 初始化新应用程序。修改 main.jsx 以匹配以下内容
```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
and App.jsx to match the following
和 App.jsx 与以下内容相匹配
```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

and remove the extra files App.css and index.css, also remove the directory assets.
并删除多余的文件App.css和index.css，同时删除目录assets。

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: *Header*, *Content*, and *Total*. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
不幸的是，整个应用程序都在同一个组件中。重构代码，使其由三个新组件组成：*Header*, *Content*, and *Total*。所有数据仍保留在 App 组件中，该组件使用道具将必要的数据传递给每个组件。Header 负责显示课程名称，Content 显示各部分及其练习次数，Total 显示练习总数。

Define the new components in the file App.jsx.
在文件 App.jsx 中定义新组件。

The App component's body will approximately be as follows:
App 组件的主体大致如下：

```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}

```

**WARNING** Don't try to program all the components concurrently, because that will almost certainly break down the whole app. Proceed in small steps, first make e.g. the component Header and only when it works for sure, you could proceed to the next component.
**警告** 不要试图同时对所有组件进行编程，因为这样做几乎肯定会导致整个程序瘫痪。分小步进行，例如，先制作组件 Header，只有当它确定能正常工作时，才能进行下一个组件的制作。

Careful, small-step progress may seem slow, but it is actually by far the fastest way to progress. Famous software developer Robert "Uncle Bob" Martin has stated
小心翼翼、循序渐进的进步看似缓慢，但实际上却是迄今为止进步最快的方式。著名软件开发人员罗伯特-"鲍勃叔叔"-马丁曾说过

> "The only way to go fast, is to go well"
> “走得快的唯一方法就是走得好”

that is, according to Martin, careful progress with small steps is even the only way to be fast.
也就是说，马丁认为，小心谨慎、小步快跑甚至是唯一的快跑方法。

### My solution
参考官方文档：[将 Props 传递给组件](https://zh-hans.react.dev/learn/passing-props-to-a-component)
App.jsx:
```js
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  // Content 组件
  const Content = (props) => {
    const Part = (props) => {
        return <p>{props.part1} {props.exercises1}</p>
    }
    return (
      <>
        <Part/>
          {props.part1} {props.exercises1}
        </p>
        <Part/>
          {props.part2} {props.exercises2}
        </p>
        <Part/>
          {props.part3} {props.exercises2}
        </p>
      </>
    );
  };

  // Total 组件
  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    );
  };
  
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;

```




## 1.2: Course Information, step 2
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.
重构 "Content" 组件，使其本身不显示任何部分的名称或练习次数。相反，它只显示三个 "部分" 组件，每个组件显示一个部分的名称和练习次数。

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

```

Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. We shall fix that in part 2, but before that, let's go to part1b to learn about JavaScript.
目前，我们的应用程序传递信息的方式非常原始，因为它是基于单个变量的。我们将在第二部分解决这个问题，但在此之前，让我们先去第一部分 b 了解 JavaScript。


### My solution
新增一个Part 组件
```js
# Exercises 1.1.-1.2

## 1.1: Course Information, step 1
The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.
我们将在本练习中开始处理的应用程序将在接下来的几个练习中进一步开发。在本课程的本练习和其他练习中，只需提交应用程序的最终状态即可。如果需要，您也可以为本系列的每个练习创建一个提交，但这完全是可选的。

Use Vite to initialize a new application. Modify main.jsx to match the following
使用 Vite 初始化新应用程序。修改 main.jsx 以匹配以下内容
```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
and App.jsx to match the following
和 App.jsx 与以下内容相匹配
```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

and remove the extra files App.css and index.css, also remove the directory assets.
并删除多余的文件App.css和index.css，同时删除目录assets。

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: *Header*, *Content*, and *Total*. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
不幸的是，整个应用程序都在同一个组件中。重构代码，使其由三个新组件组成：*Header*, *Content*, and *Total*。所有数据仍保留在 App 组件中，该组件使用道具将必要的数据传递给每个组件。Header 负责显示课程名称，Content 显示各部分及其练习次数，Total 显示练习总数。

Define the new components in the file App.jsx.
在文件 App.jsx 中定义新组件。

The App component's body will approximately be as follows:
App 组件的主体大致如下：

```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}

```

**WARNING** Don't try to program all the components concurrently, because that will almost certainly break down the whole app. Proceed in small steps, first make e.g. the component Header and only when it works for sure, you could proceed to the next component.
**警告** 不要试图同时对所有组件进行编程，因为这样做几乎肯定会导致整个程序瘫痪。分小步进行，例如，先制作组件 Header，只有当它确定能正常工作时，才能进行下一个组件的制作。

Careful, small-step progress may seem slow, but it is actually by far the fastest way to progress. Famous software developer Robert "Uncle Bob" Martin has stated
小心翼翼、循序渐进的进步看似缓慢，但实际上却是迄今为止进步最快的方式。著名软件开发人员罗伯特-"鲍勃叔叔"-马丁曾说过

> "The only way to go fast, is to go well"
> “走得快的唯一方法就是走得好”

that is, according to Martin, careful progress with small steps is even the only way to be fast.
也就是说，马丁认为，小心谨慎、小步快跑甚至是唯一的快跑方法。

### My solution
参考官方文档：[将 Props 传递给组件](https://zh-hans.react.dev/learn/passing-props-to-a-component)
App.jsx:
```js
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  // Content 组件
  const Content = (props) => {
    const Part = (props) => {
        return <p>{props.part1} {props.exercises1}</p>
    }
    return (
      <>
        <Part/>
          {props.part1} {props.exercises1}
        </p>
        <Part/>
          {props.part2} {props.exercises2}
        </p>
        <Part/>
          {props.part3} {props.exercises2}
        </p>
      </>
    );
  };

  // Total 组件
  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    );
  };
  
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;

```




## 1.2: Course Information, step 2
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.
重构 "Content" 组件，使其本身不显示任何部分的名称或练习次数。相反，它只显示三个 "部分" 组件，每个组件显示一个部分的名称和练习次数。

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

```

Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. We shall fix that in part 2, but before that, let's go to part1b to learn about JavaScript.
目前，我们的应用程序传递信息的方式非常原始，因为它是基于单个变量的。我们将在第二部分解决这个问题，但在此之前，让我们先去第一部分 b 了解 JavaScript。


### My solution
新增一个 Part 组件，用于呈现内容
```js
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  // Content 组件
  const Content = () => {
    // Part 组件
    const Part = (props) => {
      return (
        <p>
          {props.part} {props.exercises}
        </p>
      );
    };

    return (
      <>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises2} />
      </>
    );
  };

  // Total 组件
  const Total = (props) => {
    return (
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
```