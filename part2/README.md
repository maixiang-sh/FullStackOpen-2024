# Fullstack - Part 2 

Let's continue our introduction to React. First, we will take a look at how to render a data collection, like a list of names, to the screen. After this, we will inspect how a user can submit data to a React application using HTML forms. Next, our focus shifts towards looking at how JavaScript code in the browser can fetch and handle data stored in a remote backend server. Lastly, we will take a quick look at a few simple ways of adding CSS styles to our React applications.
让我们继续介绍 React。首先，我们将了解如何在屏幕上呈现数据集合（如姓名列表）。然后，我们将了解用户如何使用 HTML 表单向 React 应用程序提交数据。接下来，我们将重点关注浏览器中的 JavaScript 代码如何获取和处理存储在远程后端服务器中的数据。最后，我们将快速了解几种为 React 应用程序添加 CSS 样式的简单方法。

Part updated 14th August 2023
Create React App replaced with Vite


# Exercises 2.1.-2.5. 练习 2.1.-2.5。
The exercises are submitted via GitHub, and by marking the exercises as done in the submission system.
练习通过 GitHub 提交，并在提交系统中将练习标记为已完成。

You can submit all of the exercises into the same repository, or use multiple different repositories. If you submit exercises from different parts into the same repository, name your directories well.
您可以将所有练习提交到同一个存储库中，或使用多个不同的存储库。如果您将不同部分的练习提交到同一个存储库中，请为您的目录命名。

The exercises are submitted One part at a time. When you have submitted the exercises for a part, you can no longer submit any missed exercises for that part.
练习一次提交一部分。当您提交了某个部分的练习后，您将无法再提交该部分错过的任何练习。

Note that this part has more exercises than the ones before, so do not submit until you have done all the exercises from this part you want to submit.
请注意，这部分的练习比前面的多，因此请在完成要提交的这部分的所有练习之前不要提交。

## 2.1: Course information step6
Let's finish the code for rendering course contents from exercises 1.1 - 1.5. You can start with the code from the model answers. The model answers for part 1 can be found by going to the submission system, clicking on my submissions at the top, and in the row corresponding to part 1 under the solutions column clicking on show. To see the solution to the course info exercise, click on index.js under kurssitiedot ("kurssitiedot" means "course info").
让我们完成练习 1.1 - 1.5 中用于渲染课程内容的代码。您可以从模型答案中的代码开始。第 1 部分的标准答案可以通过以下方式找到：进入提交系统，单击顶部的“我的提交”，然后在解决方案列下与第 1 部分对应的行中单击“显示”。要查看课程信息练习的解决方案，请单击 kurssitiedot 下的 index.js（“kurssitiedot”意思是“课程信息”）。

Note that if you copy a project from one place to another, you might have to delete the node_modules directory and install the dependencies again with the command npm install before you can start the application.
请注意，如果将项目从一个位置复制到另一个位置，则可能必须删除 node_modules 目录并使用 command npm install 再次安装依赖项，然后才能启动应用程序。

Generally, it's not recommended that you copy a project's whole contents and/or add the node_modules directory to the version control system.
通常，不建议您复制项目的全部内容和/或将 node_modules 目录添加到版本控制系统。

Let's change the App component like so:
让我们像这样更改 App 组件：
```js
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
```
Define a component responsible for formatting a single course called Course.
定义一个负责格式化单个课程（称为 Course）的组件。

The component structure of the application can be, for example, the following:
例如，应用程序的组件结构可以如下：
```
App
  Course
    Header
    Content
      Part
      Part
      ...
```
Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.
因此，Course 组件包含前一部分中定义的组件，它们负责呈现课程名称及其部分。

The rendered page can, for example, look as follows:
例如，呈现的页面可以如下所示：

![img](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png)

half stack application screenshot
You don't need the sum of the exercises yet.
您还不需要练习的总和。

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.
无论课程有多​​少部分，应用程序都必须正常工作，因此，如果您添加或删除课程的部分，请确保应用程序正常工作。

Ensure that the console shows no errors!
确保控制台没有显示错误！

## 2.2: Course information step7
Show also the sum of the exercises of the course.
还显示课程练习的总和。

![img](https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png)
sum of exercises added feature

## 2.3*: Course information step8
If you haven't done so already, calculate the sum of exercises with the array method reduce.
如果您还没有这样做，请使用数组方法reduce 计算练习的总和。

Pro tip: when your code looks as follows:
专业提示：当您的代码如下所示时：
```js
const total = 
  parts.reduce((s, p) => someMagicHere)
```
and does not work, it's worth it to use console.log, which requires the arrow function to be written in its longer form:
并且不起作用，值得使用console.log，这需要以较长的形式编写箭头函数：
```js
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere 
})
```
Not working? : Use your search engine to look up how reduce is used in an Object Array.
不工作？ ：使用搜索引擎查找如何在对象数组中使用reduce。

## 2.4: Course information step9
Let's extend our application to allow for an arbitrary number of courses:
让我们扩展我们的应用程序以允许任意数量的课程：
```js
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      // ...
    </div>
  )
}
```
The application can, for example, look like this:
例如，该应用程序可以如下所示：

arbitrary number of courses feature add-on
## 2.5: Separate module step10
Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course in the same module.
将 Course 组件声明为单独的模块，由 App 组件导入。您可以将课程的所有子组件包含在同一模块中。