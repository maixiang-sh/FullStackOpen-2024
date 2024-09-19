import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Notification from "./components/Notification";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState(""); // 登陆框用户名
  const [password, setPassword] = useState(""); // 登陆框密码
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  // 登陆
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      setNotification({
        message: `${user.name} Logged in`,
        isSuccess: true,
      });
    } catch (error) {
      setUsername("");
      setPassword("");
      setNotification({
        message: "wrong username or password",
        isSuccess: false,
      });
    }
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // 登出
  const handleLogout = () => {
    // 清除本地存储的数据
    window.localStorage.removeItem("loggedAppUser");
    // 将 user 状态更新为 null
    setUser(null);
    // 重定向到首页
    navigate("/");
  };

  // 新增 blog
  const addNewBlog = async (newBlog) => {
    try {
      const response = await blogService.create(newBlog);
      setBlogs(blogs.concat(response));
      setNotification({
        message: `A new blog ${response.title} by ${response.author} added`,
        isSuccess: true,
      });
    } catch (error) {
      console.error("Error adding blog:", error);
      setNotification({
        message:
          error.response?.data?.error ||
          "An error occurred while adding the blog",
        isSuccess: false,
      });
    }
    // 5秒后清除通知
    setTimeout(() => setNotification(null), 5000);
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        {notification && (
        <Notification
          message={notification.message}
          isSuccess={notification.isSuccess}
        />
      )}
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>blogs</h2>
      {notification && (
        <Notification
          message={notification.message}
          isSuccess={notification.isSuccess}
        />
      )}

      <p>
        {`${user.name} logged in`}
        <button onClick={handleLogout}>logout</button>
      </p>
      <h2>create new</h2>
      <Form onSubmit={(newBlog) => addNewBlog(newBlog)} />
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
