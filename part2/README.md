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



# Exercise 2.11.
## 2.11: The Phonebook Step 6
We continue with developing the phonebook. Store the initial state of the application in the file db.json, which should be placed in the root of the project.
我们继续开发电话簿。将应用程序的初始状态存储在文件 db.json 中，该文件应放置在项目的根目录中。
```js
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
```
Start json-server on port 3001 and make sure that the server returns the list of people by going to the address http://localhost:3001/persons in the browser.
在端口 3001 上启动 json-server 并确保服务器通过在浏览器中访问地址 http://localhost:3001/persons 返回人员列表。

If you receive the following error message:
如果您收到以下错误消息：
```
events.js:182
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 0.0.0.0:3001
    at Object._errnoException (util.js:1019:11)
    at _exceptionWithHostPort (util.js:1041:20)
```
it means that port 3001 is already in use by another application, e.g. in use by an already running json-server. Close the other application, or change the port in case that doesn't work.
这意味着端口 3001 已被另一个应用程序使用，例如已被正在运行的 json 服务器使用。关闭其他应用程序，或更改端口，以防不起作用。

Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.
修改应用程序，以便使用 axios-library 从服务器获取数据的初始状态。使用 Effect 钩子完成抓取。

### My solution
```js
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  // 更新输入框 Query 文本的函数
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // // newName、newName 这两个 useState 移动至 PersonForm 组件
  // const [newName, setNewName] = useState("");
  // const [newNumber, setNewNumber] = useState("");
  // // 更新输入框 name 文本的函数
  // const handleNumberChange = (event) => {
  //   setNewNumber(event.target.value);
  // };
  // // 更新输入框 number 文本的函数
  // const handleNameChange = (event) => {
  //   setNewName(event.target.value);
  // };

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

  const addPerson = ({ newName, newNumber }) => {
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
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} handleQueryChange={handleQueryChange} />
      <h2>Add New</h2>
      <PersonForm onSubmit={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons(query)} />
    </div>
  );
};

export default App;

```

# Exercises 2.12.-2.15.
## 2.12: The Phonebook step 7

Let's return to our phonebook application.
让我们回到我们的电话簿应用程序。

Currently, the numbers that are added to the phonebook are not saved to a backend server. Fix this situation.
目前，添加到电话簿的号码不会保存到后端服务器。解决这个问题。

## 2.13: The Phonebook step 8
Extract the code that handles the communication with the backend into its own module by following the example shown earlier in this part of the course material.
按照本部分课程材料前面所示的示例，将处理与后端通信的代码提取到其自己的模块中。

## 2.14: The Phonebook step 9
Make it possible for users to delete entries from the phonebook. The deletion can be done through a dedicated button for each person in the phonebook list. You can confirm the action from the user by using the window.confirm method:
使用户可以从电话簿中删除条目。可以通过电话簿列表中每个人的专用按钮来完成删除。您可以使用 window.confirm 方法确认用户的操作：
![img](https://fullstackopen.com/static/591ebc9e0e2dc651c0d2877efd763a59/5a190/24e.png)

## 2.17 window confirm feature screeshot
The associated resource for a person in the backend can be deleted by making an HTTP DELETE request to the resource's URL. If we are deleting e.g. a person who has the id 2, we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2. No data is sent with the request.
可以通过向资源的 URL 发出 HTTP DELETE 请求来删除后端人员的关联资源。如果我们要删除例如id 为 2 的人，我们必须向 URL localhost:3001/persons/2 发出 HTTP DELETE 请求。请求中不发送任何数据。

You can make an HTTP DELETE request with the axios library in the same way that we make all of the other requests.
您可以使用 axios 库发出 HTTP DELETE 请求，就像我们发出所有其他请求一样。

NB: You can't use the name delete for a variable because it's a reserved word in JavaScript. E.g. the following is not possible:
注意：您不能对变量使用名称“delete”，因为它是 JavaScript 中的保留字。例如。以下情况是不可能的：
```
// use some other name for variable!
const delete = (id) => {
  // ...
}

```

## 2.15*: The Phonebook step 10
Why is there a star in the exercise? See here for the explanation.
为什么练习中有一颗星星？请参阅此处的解释。

Change the functionality so that if a number is added to an already existing user, the new number will replace the old number. It's recommended to use the HTTP PUT method for updating the phone number.
更改功能，以便如果将号码添加到现有用户，新号码将取代旧号码。建议使用 HTTP PUT 方法来更新电话号码。

If the person's information is already in the phonebook, the application can ask the user to confirm the action:
如果该人的信息已在电话簿中，则应用程序可以要求用户确认操作：
## 2.18 screenshot alert confirmation

![img](https://fullstackopen.com/static/7353398520426bd823cf92202767653f/5a190/16e.png)



# Exercises 2.16.-2.17.

## 2.16: Phonebook step 11
Use the improved error message example from part 2 as a guide to show a notification that lasts for a few seconds after a successful operation is executed (a person is added or a number is changed):
使用第 2 部分中改进的错误消息示例作为指南，显示在成功执行操作（添加人员或更改号码）后持续几秒钟的通知：
![img](https://fullstackopen.com/static/da9af454f06489ca6e7453150beda738/5a190/27e.png)

successful green added screenshot
## 2.17*: Phonebook step 12
Open your application in two browsers. If you delete a person in browser 1 a short while before attempting to change the person's phone number in browser 2, you will get the following error messages:
在两个浏览器中打开您的应用程序。如果您在浏览器 1 中删除某个人，然后尝试在浏览器 2 中更改此人的电话号码，您将收到以下错误消息：
![img](https://fullstackopen.com/static/be832524a82a387fb3adddda37eaa149/5a190/29b.png)

error message 404 not found when changing multiple browsers
Fix the issue according to the example shown in promise and errors in part 2. Modify the example so that the user is shown a message when the operation does not succeed. The messages shown for successful and unsuccessful events should look different:
根据第2部分中的promise和errors所示的示例修复问题。修改示例，以便在操作不成功时向用户显示消息。成功和不成功事件显示的消息应该看起来不同：

![img](https://fullstackopen.com/static/dfc66f03514b3f013cf19ba1339ba34f/5a190/28e.png)

error message shown on screen instead of in console feature add-on
Note that even if you handle the exception, the first "404" error message is still printed to the console. But you should not see "Uncaught (in promise) Error".
请注意，即使您处理了异常，第一个“404”错误消息仍然会打印到控制台。但您不应该看到“未捕获（承诺）错误”。



## 2.18* Data for countries, step 1
At https://studies.cs.helsinki.fi/restcountries/ you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.
在 https://studies.cs.helsinki.fi/restcountries/ 上，您可以找到一项服务，该服务通过 REST API 以所谓的机器可读格式提供与不同国家/地区相关的大量信息。制作一个应用程序，允许您查看来自不同国家的信息。

The user interface is very simple. The country to be shown is found by typing a search query into the search field.
用户界面非常简单。通过在搜索字段中输入搜索查询可以找到要显示的国家/地区。

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
如果与查询匹配的国家/地区太多（超过 10 个），系统会提示用户使查询更加具体：
![img](https://fullstackopen.com/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/5a190/19b1.png)

too many matches screenshot
If there are ten or fewer countries, but more than one, then all countries matching the query are shown:
如果国家/地区数量不超过 10 个但超过 1 个，则显示与查询匹配的所有国家/地区：
![img](https://fullstackopen.com/static/1d4ebf199806ccfe0df529c08e2a0c6d/5a190/19b2.png)

matching countries in a list screenshot
When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown:
当只有一个国家匹配查询时，则显示该国家的基本数据（例如首都和面积）、国旗和使用的语言：
![img](https://fullstackopen.com/static/1da341d99aa963449991676f4f6c34b3/5a190/19c3.png)

flag and additional attributes screenshot
NB: It is enough that your application works for most countries. Some countries, like Sudan, can be hard to support since the name of the country is part of the name of another country, South Sudan. You don't need to worry about these edge cases.
注意：您的应用程序适用于大多数国家就足够了。有些国家，如苏丹，可能很难支持，因为该国的名称是另一个国家南苏丹名称的一部分。您无需担心这些边缘情况。

## 2.19*: Data for countries, step 2
There is still a lot to do in this part, so don't get stuck on this exercise!
这部分还有很多工作要做，所以不要卡在这个练习上！

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:
改进上一个练习中的应用程序，以便当页面上显示多个国家/地区的名称时，该国家/地区名称旁边有一个按钮，按下该按钮会显示该国家/地区的视图：

attach show buttons for each country feature
In this exercise, it is also enough that your application works for most countries. Countries whose name appears in the name of another country, like Sudan, can be ignored.
在此练习中，您的应用程序适用于大多数国家/地区就足够了。名称中出现另一个国家名称的国家（例如苏丹）可以忽略。

## 2.20*: Data for countries, step 3
Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is https://openweathermap.org. Note that it might take some minutes until a generated API key is valid.
添加到显示单个国家/地区数据的视图中，添加该国家/地区首都的天气预报。有数十家天气数据提供商。一种建议的 API 是 https://openweathermap.org。请注意，生成的 API 密钥可能需要几分钟才能生效。

weather report added feature
If you use Open weather map, here is the description for how to get weather icons.
如果您使用开放天气地图，这里是如何获取天气图标的说明。

NB: In some browsers (such as Firefox) the chosen API might send an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with http://. This issue can be fixed by completing the exercise using Chrome.
注意：在某些浏览器（例如 Firefox）中，所选 API 可能会发送错误响应，这表明不支持 HTTPS 加密，尽管请求 URL 以 http:// 开头。可以通过使用 Chrome 完成练习来解决此问题。

NB: You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an environment variable to save the key.
注意：您需要一个 api 密钥才能使用几乎所有天气服务。不要将 api-key 保存到源代码管理中！也不会将 api-key 硬编码到源代码中。而是使用环境变量来保存密钥。

Assuming the api-key is 54l41n3n4v41m34rv0, when the application is started like so:
假设 api-key 是 54l41n3n4v41m34rv0，当应用程序启动时，如下所示：

export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // For Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // For Windows cmd.execopy
you can access the value of the key from the import.meta.env object:
您可以从 import.meta.env 对象访问键的值：

const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startupcopy
Note that you will need to restart the server to apply the changes.
请注意，您需要重新启动服务器才能应用更改。

This was the last exercise of this part of the course. It's time to push your code to GitHub and mark all of your finished exercises to the exercise submission system.
这是这部分课程的最后一个练习。是时候将您的代码推送到 GitHub 并将所有已完成的练习标记到练习提交系统了。