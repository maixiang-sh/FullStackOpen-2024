### Exercises 3.1.-3.6. 练习 3.1.-3.6。

**NB:** It's recommended to do all of the exercises from this part into a new dedicated git repository, and place your source code right at the root of the repository. Otherwise, you will run into problems in exercise 3.10.  
注意：建议将本部分的所有练习放入新的专用 git 存储库中，并将源代码放在存储库的根目录下。否则，你将在练习 3.10 中遇到问题。

**NB:** Because this is not a frontend project and we are not working with React, the application **is not created** with create vite@latest -- --template react. You initialize this project with the _npm init_ command that was demonstrated earlier in this part of the material.  
注意：因为这不是一个前端项目，并且我们不使用 React，所以该应用程序不是使用 create vite@latest -- --template React 创建的。您可以使用本部分材料前面演示的 npm init 命令初始化此项目。

**Strong recommendation:** When you are working on backend code, always keep an eye on what's going on in the terminal that is running your application.  
强烈建议：当您处理后端代码时，请始终关注运行应用程序的终端中发生的情况。

#### 3.1: Phonebook backend step 1  
3.1：电话簿后端步骤1

Implement a Node application that returns a hardcoded list of phonebook entries from the address [http://localhost:3001/api/persons](http://localhost:3001/api/persons).  
实现一个 Node 应用程序，该应用程序从地址 http://localhost:3001/api/persons 返回电话簿条目的硬编码列表。

Data: 数据：

    [
        { 
          "id": 1,
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
    ]

Output in the browser after GET request:  
GET请求后浏览器输出：

![JSON data of 4 people in browser from api/persons](https://fullstackopen.com/static/a4879a92f2a8bd2e96c6d67fe3f34383/5a190/22e.png)

Notice that the forward slash in the route _api/persons_ is not a special character, and is just like any other character in the string.  
请注意，路由 api/persons 中的正斜杠不是特殊字符，就像字符串中的任何其他字符一样。

The application must be started with the command _npm start_.  
该应用程序必须使用命令 npm start 启动。

The application must also offer an _npm run dev_ command that will run the application and restart the server whenever changes are made and saved to a file in the source code.  
应用程序还必须提供 npm run dev 命令，该命令将在进行更改并将更改保存到源代码中的文件时运行应用程序并重新启动服务器。

#### 3.2: Phonebook backend step 2  
3.2：电话簿后端步骤2

Implement a page at the address [http://localhost:3001/info](http://localhost:3001/info) that looks roughly like this:  
在地址 http://localhost:3001/info 实现一个页面，大致如下：

![Screenshot for 3.2](https://fullstackopen.com/static/26383e4e706a7f89c140690121be2ea1/5a190/23x.png)

The page has to show the time that the request was received and how many entries are in the phonebook at the time of processing the request.  
该页面必须显示收到请求的时间以及处理请求时电话簿中有多少条目。

There can only be one response.send() statement in an Express app route. Once you send a response to the client using response.send(), the request-response cycle is complete and no further response can be sent.  
Express 应用程序路由中只能有一个 response.send() 语句。一旦使用response.send()向客户端发送响应，请求-响应周期就完成了，并且不能再发送进一步的响应。

To include a line space in the output, use `<br/>` tag, or wrap the statements in `<p>` tags.  
要在输出中包含行空间，请使用 `<br/>` 标记，或将语句包装在 `<p>` 标记中。

#### 3.3: Phonebook backend step 3  
3.3：电话簿后端第3步

Implement the functionality for displaying the information for a single phonebook entry. The url for getting the data for a person with the id 5 should be [http://localhost:3001/api/persons/5](http://localhost:3001/api/persons/5)  
实现显示单个电话簿条目信息的功能。获取 id 为 5 的人员数据的 url 应该是 http://localhost:3001/api/persons/5

If an entry for the given id is not found, the server has to respond with the appropriate status code.  
如果未找到给定 ID 的条目，服务器必须使用适当的状态代码进行响应。

#### 3.4: Phonebook backend step 4  
3.4：电话簿后端第4步

Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.  
实现通过向电话簿条目的唯一 URL 发出 HTTP DELETE 请求来删除单个电话簿条目的功能。

Test that your functionality works with either Postman or the Visual Studio Code REST client.  
测试您的功能是否适用于 Postman 或 Visual Studio Code REST 客户端。

#### 3.5: Phonebook backend step 5  
3.5：电话簿后端第5步

Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address [http://localhost:3001/api/persons](http://localhost:3001/api/persons).  
展开后端，以便可以通过向地址 http://localhost:3001/api/persons 发出 HTTP POST 请求来添加新的电话簿条目。

Generate a new id for the phonebook entry with the [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function. Use a big enough range for your random values so that the likelihood of creating duplicate ids is small.  
使用 Math.random 函数为电话簿条目生成新的 id。为随机值使用足够大的范围，以便创建重复 id 的可能性很小。

#### 3.6: Phonebook backend step 6  
3.6：电话簿后端第6步

Implement error handling for creating new entries. The request is not allowed to succeed, if:  
实施创建新条目的错误处理。如果出现以下情况，则不允许请求成功：

-   The name or number is missing  
    姓名或号码缺失
-   The name already exists in the phonebook  
    该姓名已存在于电话簿中

Respond to requests like these with the appropriate status code, and also send back information that explains the reason for the error, e.g.:  
使用适当的状态代码响应此类请求，并发回解释错误原因的信息，例如：

    { error: 'name must be unique' }


### Exercises 3.7.-3.8. 练习 3.7.-3.8。

#### 3.7: Phonebook backend step 7  
3.7：电话簿后端第7步

Add the [morgan](https://github.com/expressjs/morgan) middleware to your application for logging. Configure it to log messages to your console based on the _tiny_ configuration.  
将 Morgan 中间件添加到您的应用程序中以进行日志记录。将其配置为根据微小配置将消息记录到控制台。

The documentation for Morgan is not the best, and you may have to spend some time figuring out how to configure it correctly. However, most documentation in the world falls under the same category, so it's good to learn to decipher and interpret cryptic documentation in any case.  
Morgan 的文档不是最好的，您可能需要花一些时间来弄清楚如何正确配置它。然而，世界上大多数文档都属于同一类别，因此在任何情况下学习破译和解释神秘文档都是有好处的。

Morgan is installed just like all other libraries with the _npm install_ command. Taking morgan into use happens the same way as configuring any other middleware by using the _app.use_ command.  
Morgan 的安装就像所有其他库一样，使用 npm install 命令进行安装。使用 morgan 的方式与使用 app.use 命令配置任何其他中间件的方式相同。


#### 3.8: Phonebook backend step 8  
3.8：电话簿后端步骤 8

Configure morgan so that it also shows the data sent in HTTP POST requests:  
配置 morgan，使其还显示 HTTP POST 请求中发送的数据：

![terminal showing post data being sent](https://fullstackopen.com/static/4ed4b48465d48df517158501c0be187e/5a190/24.png)

Note that logging data even in the console can be dangerous since it can contain sensitive data and may violate local privacy law (e.g. GDPR in EU) or business-standard. In this exercise, you don't have to worry about privacy issues, but in practice, try not to log any sensitive data.  
请注意，即使在控制台中记录数据也可能很危险，因为它可能包含敏感数据，并且可能违反当地隐私法（例如欧盟的 GDPR）或商业标准。在本练习中，您不必担心隐私问题，但在实践中，请尽量不要记录任何敏感数据。

This exercise can be quite challenging, even though the solution does not require a lot of code.  
尽管该解决方案不需要大量代码，但此练习可能非常具有挑战性。

This exercise can be completed in a few different ways. One of the possible solutions utilizes these two techniques:  
这个练习可以通过几种不同的方式完成。可能的解决方案之一利用这两种技术：

-   [creating new tokens  创建新的代币](https://github.com/expressjs/morgan#creating-new-tokens)
-   [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)