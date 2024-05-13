# Fullstack - Part 2 

Let's continue our introduction to React. First, we will take a look at how to render a data collection, like a list of names, to the screen. After this, we will inspect how a user can submit data to a React application using HTML forms. Next, our focus shifts towards looking at how JavaScript code in the browser can fetch and handle data stored in a remote backend server. Lastly, we will take a quick look at a few simple ways of adding CSS styles to our React applications.
让我们继续介绍 React。首先，我们将了解如何在屏幕上呈现数据集合（如姓名列表）。然后，我们将了解用户如何使用 HTML 表单向 React 应用程序提交数据。接下来，我们将重点关注浏览器中的 JavaScript 代码如何获取和处理存储在远程后端服务器中的数据。最后，我们将快速了解几种为 React 应用程序添加 CSS 样式的简单方法。

Part updated 14th August 2023
Create React App replaced with Vite


# Exercises 2.1.-2.5.
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

![img](https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png)

arbitrary number of courses feature add-on
## 2.5: Separate module step10
Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course in the same module.
将 Course 组件声明为单独的模块，由 App 组件导入。您可以将课程的所有子组件包含在同一模块中。




# Exercises 2.6.-2.10.
In the first exercise, we will start working on an application that will be further developed in the later exercises. In related sets of exercises, it is sufficient to return the final version of your application. You may also make a separate commit after you have finished each part of the exercise set, but doing so is not required.
在第一个练习中，我们将开始开发一个应用程序，该应用程序将在后面的练习中进一步开发。在相关的练习中，返回应用程序的最终版本就足够了。您也可以在完成练习集的每个部分后进行单独的提交，但这不是必需的。

## 2.6: The Phonebook Step 1
Let's create a simple phonebook. In this part, we will only be adding names to the phonebook.
让我们创建一个简单的电话簿。在这一部分中，我们只会将姓名添加到电话簿中。

Let us start by implementing the addition of a person to the phonebook.
让我们首先实现将一个人添加到电话簿中。

You can use the code below as a starting point for the App component of your application:
您可以使用下面的代码作为应用程序的 App 组件的起点：
```js
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
```
The newName state is meant for controlling the form input element.
newName 状态用于控制表单输入元素。

Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:
有时，出于调试目的将状态和其他变量呈现为文本可能很有用。您可以临时将以下元素添加到渲染组件中：
```js
<div>debug: {newName}</div>copy
```
It's also important to put what we learned in the debugging React applications chapter of part one into good use. The React developer tools extension is incredibly useful for tracking changes that occur in the application's state.
充分利用我们在第一部分的调试 React 应用程序一章中学到的知识也很重要。 React 开发人员工具扩展对于跟踪应用程序状态中发生的变化非常有用。

After finishing this exercise your application should look something like this:
完成本练习后，您的应用程序应如下所示：
![img](https://fullstackopen.com/static/501199c4a6d7a5702a7bdf31998d5a1d/5a190/10e.png)

screenshot of 2.6 finished
Note the use of the React developer tools extension in the picture above!
请注意上图中 React 开发者工具扩展的使用！

**NB:**

you can use the person's name as a value of the key property
您可以使用该人的姓名作为键属性的值
remember to prevent the default action of submitting HTML forms!
请记住阻止提交 HTML 表单的默认操作！

### My solution
```js
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <div key={index}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;

```

## 2.7: The Phonebook Step 2
Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task. Keep in mind how object equality works in Javascript.
阻止用户添加电话簿中已存在的姓名。 JavaScript 数组有许多合适的方法来完成此任务。请记住对象相等性在 Javascript 中的工作原理。

Issue a warning with the alert command when such an action is attempted:
当尝试执行此类操作时，发出警报 command 警告：
![img](https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/5a190/11e.png)

browser alert: "user already exists in the phonebook"
Hint: when you are forming strings that contain values from variables, it is recommended to use a template string:
提示：当您形成包含变量值的字符串时，建议使用模板字符串：

`${newName} is already added to phonebook`
If the newName variable holds the value Arto Hellas, the template string expression returns the string
如果 newName 变量保存值 Arto Hellas，则模板字符串表达式返回该字符串

`Arto Hellas is already added to phonebook`
The same could be done in a more Java-like fashion by using the plus operator:
通过使用加号运算符，可以以更类似于 Java 的方式完成相同的操作：

newName + ' is already added to phonebook'copy
Using template strings is the more idiomatic option and the sign of a true JavaScript professional.
使用模板字符串是更惯用的选择，也是真正的 JavaScript 专业人士的标志。

## 2.8: The Phonebook Step 3
Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler):
通过允许用户将电话号码添加到电话簿来扩展您的应用程序。您需要向表单添加第二个输入元素（及其自己的事件处理程序）：
```js
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
```
At this point, the application could look something like this. The image also displays the application's state with the help of React developer tools:
此时，应用程序可能看起来像这样。该图像还借助 React 开发者工具显示应用程序的状态：
![img](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png)

### My solution
```js
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // 更新输入框 name 文本的函数
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // 更新输入框 number 文本的函数
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // 检查名字是否已存在于 persons 中
  const nameAlreadyExists = (name) => {
    // Array.some() 用于检查数组中是否至少有一个元素符合条件
    return persons.some((person) => person.name == name);
  };

  const addPerson = (event) => {
    event.preventDefault();
    // 检查名字是否已存在
    if (nameAlreadyExists(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    // 新建 person
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    // 添加新 person 并更新
    setPersons(persons.concat(newPerson));
    // 重置输入框内容
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;

```

## 2.8 sample screenshot
## 2.9*: The Phonebook Step 4
Implement a search field that can be used to filter the list of people by name:
实现一个可用于按姓名过滤人员列表的搜索字段：

![img](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png)


## 2.9 search field
You can implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is case insensitive, meaning that the search term arto also returns results that contain Arto with an uppercase A.
您可以将搜索字段实现为放置在 HTML 表单外部的输入元素。图像中显示的过滤逻辑不区分大小写，这意味着搜索词 arto 也会返回包含带有大写 A 的 Arto 的结果。

**NB:** When you are working on new functionality, it's often useful to "hardcode" some dummy data into your application, e.g.
注意：当您开发新功能时，将一些虚拟数据“硬编码”到您的应用程序中通常很有用，例如
```js
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // ...
}
```
This saves you from having to manually input data into your application for testing out your new functionality.
这使您无需手动将数据输入到应用程序中来测试新功能。


### My solution
```js
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");

  // 更新输入框 Query 文本的函数
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // 更新输入框 name 文本的函数
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // 更新输入框 number 文本的函数
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // 返回 name 包含关键词的 person 数组
  const filterPersons = (query) => {
    const queryLower = query.toLowerCase();
    return persons.filter((person) =>
      person.name.toLowerCase().includes(queryLower)
    );
  };

  // 检查名字是否已存在于 persons 中
  const nameAlreadyExists = (name) => {
    // Array.some() 用于检查数组中是否至少有一个元素符合条件
    return persons.some((person) => person.name == name);
  };

  const addPerson = (event) => {
    event.preventDefault();
    // 检查名字是否已存在
    if (nameAlreadyExists(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    // 新建 person
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    // 添加新 person 并更新
    setPersons(persons.concat(newPerson));
    // 重置输入框内容
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={query} onChange={handleQueryChange} />
        </div>
      </form>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons(query).map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;


```

## 2.10: The Phonebook Step 5
If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the App root component.
如果您在单个组件中实现了应用程序，请通过将合适的部分提取到新组件中来重构它。维护应用程序的状态和应用程序根组件中的所有事件处理程序。

It is sufficient to extract three components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people to the phonebook, a component that renders all people from the phonebook, and a component that renders a single person's details.
从应用程序中提取三个组件就足够了。例如，单独组件的良好候选者包括搜索过滤器、用于将新人员添加到电话簿的表单、呈现电话簿中所有人员的组件以及呈现单个人的详细信息的组件。

The application's root component could look similar to this after the refactoring. The refactored root component below only renders titles and lets the extracted components take care of the rest.
重构后，应用程序的根组件可能与此类似。下面重构的根组件仅呈现标题，并让提取的组件处理其余部分。
```js
const App = () => {
  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm 
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  )
}
```
**NB:** You might run into problems in this exercise if you define your components "in the wrong place". Now would be a good time to rehearse the chapter do not define a component in another component from the last part.
注意：如果您“在错误的位置”定义组​​件，则在此练习中您可能会遇到问题。现在是排练本章的好时机，不要在上一部分的另一个组件中定义组件。