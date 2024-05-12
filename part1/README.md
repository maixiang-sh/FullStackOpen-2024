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



# Exercises 1.3.-1.5.
We continue building the application that we started working on in the previous exercises. You can write the code into the same project since we are only interested in the final state of the submitted application.
我们继续构建在之前的练习中开始开发的应用程序。您可以将代码写入同一个项目中，因为我们只对提交的应用程序的最终状态感兴趣。

Pro-tip: you may run into issues when it comes to the structure of the props that components receive. A good way to make things more clear is by printing the props to the console, e.g. as follows:
专业提示：当涉及到组件接收的 props 的结构时，您可能会遇到问题。让事情变得更清楚的一个好方法是将道具打印到控制台，例如如下：
```js
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
```
If and when you encounter an error message
如果您遇到错误消息

Objects are not valid as a React child
对象作为 React 子对象无效
keep in mind the things told here.
请记住这里所说的事情。

## 1.3: Course Information step 3
Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:
让我们继续在应用程序中使用对象。按如下方式修改 App 组件的变量定义，并重构应用程序以使其仍然可以运行：

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

### My solution
使用结构赋值， 将 props.part 解构赋值为 name 和 exercises
然后 Part part={part1} 传入 part 对象
```js
const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
}

const Part = (props) => {
    const {name, exercises} = props.part
    // ...
}

<Part part={part1} />
```

App.jsx:
```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  // Content 组件
  const Content = () => {
    // Part 组件
    const Part = (props) => {
      //console.log(props)
      const {name, exercises} = props.part
      return (
        <p>
          {name} {exercises}
        </p>
      );
    };

    return (
      <>
        <Part part={part1} />
        <Part part={part2} />
        <Part part={part3} />
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
      <Content/>
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

export default App;
```

## 1.4: Course Information step 4
Place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:
将对象放入数组中。将App的变量定义修改为如下形式，并相应修改应用程序的其他部分：
```js
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

NB at this point you can assume that there are always three items, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the next part of the course.
注意，此时您可以假设始终存在三个项目，因此无需使用循环遍历数组。我们将在课程的下一部分中回到基于数组中的项目渲染组件的主题，并进行更彻底的探索。

However, do not pass different objects as separate props from the App component to the components Content and Total. Instead, pass them directly as an array:
但是，不要将不同的对象作为单独的 props 从 App 组件传递到组件 Content 和 Total。相反，直接将它们作为数组传递：
```js
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```


### My solution
**Note：解构对象用 {} 解构数组用 []**
```js
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  // Content 组件
  const Content = (props) => {
    // 解构对象用 {} 解构数组用 []
    const [ part1, part2, part3 ] = props.parts;
    // Part 组件
    const Part = (props) => {
      const { name, exercises } = props.part
      return (
        <p>
          {name} {exercises}
        </p>
      );
    };

    return (
      <>
        <Part part={part1} />
        <Part part={part2} />
        <Part part={part3} />
      </>
    );
  };

  // Total 组件
  const Total = (props) => {
    const [ part1, part2, part3 ] = props.parts
    return (
      <p>
        Number of exercises {part1.exercises + part2.exercises + part3.exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;

```

## 1.5: Course Information step 5
Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.
让我们更进一步进行更改。将课程及其部分更改为单个 JavaScript 对象。修复所有损坏的东西。
```js
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```

### My solution

```js
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.name}</h1>;
  };

  // Content 组件
  const Content = (props) => {
    // 解构对象用 {} 解构数组用 []
    const [ part1, part2, part3 ] = props.parts;
    // Part 组件
    const Part = (props) => {
      const { name, exercises } = props.part
      return (
        <p>
          {name} {exercises}
        </p>
      );
    };

    return (
      <>
        <Part part={part1} />
        <Part part={part2} />
        <Part part={part3} />
      </>
    );
  };

  // Total 组件
  const Total = (props) => {
    const [ part1, part2, part3 ] = props.parts
    return (
      <p>
        Number of exercises {part1.exercises + part2.exercises + part3.exercises}
      </p>
    );
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

```


# Exercises 1.6.-1.14.
Submit your solutions to the exercises by first pushing your code to GitHub and then marking the completed exercises into the "my submissions" tab of the submission application.
首先将代码推送到 GitHub，然后将已完成的练习标记到提交应用程序的“我的提交”选项卡中，从而提交练习的解决方案。

Remember, submit all the exercises of one part in a single submission. Once you have submitted your solutions for one part, you cannot submit more exercises to that part anymore.
请记住，在一次提交中提交一个部分的所有练习。一旦您提交了某一部分的解决方案，您就无法再向该部分提交更多练习。

Some of the exercises work on the same application. In these cases, it is sufficient to submit just the final version of the application. If you wish, you can make a commit after every finished exercise, but it is not mandatory.
一些练习适用于同一应用程序。在这些情况下，仅提交申请的最终版本就足够了。如果您愿意，您可以在每次完成练习后进行提交，但这不是强制性的。

In some situations you may also have to run the command below from the root of the project:
在某些情况下，您可能还需要从项目的根目录运行下面的 command：

`rm -rf node_modules/ && npm icopy`

If and when you encounter an error message
如果您遇到错误消息

Objects are not valid as a React child
对象作为 React 子对象无效
keep in mind the things told here.
请记住这里所说的事情。

### 1.6: unicafe step 1
Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.
与大多数公司一样，赫尔辛基大学 Unicafe 的学生餐厅也收集顾客的反馈。您的任务是实现一个用于收集客户反馈的 Web 应用程序。反馈只有三种选择：好、中立和差。

The application must display the total number of collected feedback for each category. Your final application could look like this:
应用程序必须显示每个类别收集的反馈总数。您的最终应用程序可能如下所示：
![img](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

screenshot of feedback options
Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.
请注意，您的应用程序只需在单个浏览器会话期间运行。一旦刷新页面，收集的反馈就会消失。

It is advisable to use the same structure that is used in the material and previous exercise. File main.jsx is as follows:
建议使用材料和之前练习中使用的相同结构。文件main.jsx如下：
```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

```
You can use the code below as a starting point for the App.jsx file:
您可以使用以下代码作为 App.jsx 文件的起点：

```js
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

### My solution
```js
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feed back</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>nenutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>nenutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
```


## 1.7: unicafe step 2
Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.
扩展您的应用程序，使其显示有关收集的反馈的更多统计信息：收集的反馈总数、平均分数（好：1、中：0、差：-1）以及积极反馈的百分比。

average and percentage positive screenshot feedback
!(img)[https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png]

## 1.8: unicafe step 3
Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.
重构您的应用程序，以便将显示的统计信息提取到其自己的统计信息组件中。应用程序的状态应保留在应用程序根组件中。

Remember that components should not be defined inside other components:
请记住，组件不应在其他组件内定义：
```js
// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```
### My solution
```js
import { useState } from "react";

// a proper place to define a component
const Statistics = ({ numOfGood, numOfNeutral, numOfBad }) => {
  const all = numOfGood + numOfNeutral + numOfBad;
  const average = (numOfGood - numOfBad) / all;
  const positive = (numOfGood / all) * 100;

  return (
    <>
      <h1>statistics</h1>
      <p>good {numOfGood}</p>
      <p>nenutral {numOfNeutral}</p>
      <p>bad {numOfBad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feed back</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>nenutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics numOfGood={good} numOfNeutral={neutral} numOfBad={bad} />
    </div>
  );
};

export default App;

```


## 1.9: unicafe step 4
Change your application to display statistics only once feedback has been gathered.
将您的应用程序更改为仅在收集反馈后才显示统计信息。

no feedback given text screenshot
!(img)[https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png]
### My solution
```js
import { useState } from "react";

// a proper place to define a component
const Statistics = ({ numOfGood, numOfNeutral, numOfBad }) => {
  const all = numOfGood + numOfNeutral + numOfBad;
  const average = (numOfGood - numOfBad) / all;
  const positive = (numOfGood / all) * 100;

  if (all == 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <p>good {numOfGood}</p>
      <p>nenutral {numOfNeutral}</p>
      <p>bad {numOfBad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feed back</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>nenutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics numOfGood={good} numOfNeutral={neutral} numOfBad={bad} />
    </div>
  );
};

export default App;

```

## 1.10: unicafe step 5
Let's continue refactoring the application. Extract the following two components:
让我们继续重构应用程序。提取以下两个组件：

Button handles the functionality of each feedback submission button.
按钮处理每个反馈提交按钮的功能。
StatisticLine for displaying a single statistic, e.g. the average score.
StatisticLine 用于显示单个统计数据，例如平均分。
To be clear: the StatisticLine component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:
需要明确的是：StatisticLine 组件始终显示单个统计数据，这意味着应用程序使用多个组件来呈现所有统计数据：

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```
The application's state should still be kept in the root App component.
应用程序的状态仍应保留在根应用程序组件中。

### My solution
```js
import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

// a proper place to define a component
const Statistics = ({ numOfGood, numOfNeutral, numOfBad }) => {
  const all = numOfGood + numOfNeutral + numOfBad;
  const average = (numOfGood - numOfBad) / all;
  const positive = (numOfGood / all) * 100 + "%";

  if (all == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <StatisticLine text={"good"} value={numOfGood} />
      <StatisticLine text={"nenutral"} value={numOfNeutral} />
      <StatisticLine text={"bad"} value={numOfBad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feed back</h1>
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics numOfGood={good} numOfNeutral={neutral} numOfBad={bad} />
    </div>
  );
};

export default App;

```

## 1.11*: unicafe step 6
Display the statistics in an HTML table, so that your application looks roughly like this:
在 HTML 表中显示统计信息，以便您的应用程序大致如下所示：

screenshot of statistics table
Remember to keep your console open at all times. If you see this warning in your console:
请记住始终保持控制台打开。如果您在控制台中看到此警告：

console warning
Then perform the necessary actions to make the warning disappear. Try pasting the error message into a search engine if you get stuck.
然后执行必要的操作以使警告消失。如果遇到困难，请尝试将错误消息粘贴到搜索引擎中。

Typical source of an error Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist. is from a Chrome extension. Try going to chrome://extensions/ and try disabling them one by one and refreshing React app page; the error should eventually disappear.
错误的典型来源未检查的runtime.lastError：无法建立连接。接收端不存在。来自 Chrome 扩展。尝试访问 chrome://extensions/ 并尝试将它们一一禁用并刷新 React 应用页面；错误最终应该消失。

Make sure that from now on you don't see any warnings in your console!
确保从现在开始您在控制台中不会看到任何警告！

### My solution
```js
import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// a proper place to define a component
const Statistics = ({ numOfGood, numOfNeutral, numOfBad }) => {
  const all = numOfGood + numOfNeutral + numOfBad;
  const average = (numOfGood - numOfBad) / all;
  const positive = (numOfGood / all) * 100 + "%";

  if (all == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <table>
      <StatisticLine text={"good"} value={numOfGood} />
      <StatisticLine text={"nenutral"} value={numOfNeutral} />
      <StatisticLine text={"bad"} value={numOfBad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive} />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feed back</h1>
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics numOfGood={good} numOfNeutral={neutral} numOfBad={bad} />
    </div>
  );
};

export default App;

```

## 1.12*: anecdotes step 1
The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.
软件工程的世界充满了轶事，它们将我们领域中永恒的真理提炼成简短的俏皮话。

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:
通过添加一个按钮来扩展以下应用程序，单击该按钮可以显示软件工程领域的随机轶事：
```js
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}

export default App
```
Content of the file main.jsx is the same as in previous exercises.
main.jsx 文件的内容与之前练习中的内容相同。

Find out how to generate random numbers in JavaScript, eg. via a search engine or on Mozilla Developer Network. Remember that you can test generating random numbers e.g. straight in the console of your browser.
了解如何在 JavaScript 中生成随机数，例如。通过搜索引擎或 Mozilla 开发者网络。请记住，您可以测试生成随机数，例如直接在浏览器的控制台中。

Your finished application could look something like this:
您完成的应用程序可能如下所示：

random anecdote with next button

## 1.13*: anecdotes step 2

Expand your application so that you can vote for the displayed anecdote.
扩展您的应用程序，以便您可以为所显示的轶事投票。

anecdote app with votes button added
NB store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.
注意，将每个轶事的投票存储到组件状态的数组或对象中。请记住，更新存储在对象和数组等复杂数据结构中的状态的正确方法是复制状态。

You can create a copy of an object like this:
您可以像这样创建对象的副本：
```js
const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...points }
// increment the property 2 value by one
copy[2] += 1     copy
OR a copy of an array like this:
或者像这样的数组的副本：

const points = [1, 4, 6, 3]

const copy = [...points]
// increment the value in position 2 by one
copy[2] += 1
```

Using an array might be the simpler choice in this case. Searching the Internet will provide you with lots of hints on how to create a zero-filled array of the desired length.
在这种情况下，使用数组可能是更简单的选择。搜索互联网将为您提供大量有关如何创建所需长度的零填充数组的提示。

## 1.14*: anecdotes step 3
Now implement the final version of the application that displays the anecdote with the largest number of votes:
现在实现显示投票数最多的轶事的应用程序的最终版本：

anecdote with largest number of votes
If multiple anecdotes are tied for first place it is sufficient to just show one of them.
如果有多个轶事并列第一，那么只展示其中一个就足够了。

This was the last exercise for this part of the course and it's time to push your code to GitHub and mark all of your finished exercises to the "my submissions" tab of the submission application.
这是本部分课程的最后一个练习，是时候将您的代码推送到 GitHub 并将所有已完成的练习标记到提交应用程序的“我的提交”选项卡中。