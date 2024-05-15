import { useState, useEffect } from "react";
// components 组件
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
// api client api 客户端
import PersonServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState("");
  // Used to <Notification />
  const [notification, setNotification] = useState({});

  useEffect(() => {
    PersonServices.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);

  /**
   * 更新筛选框的 handle 方法
   *
   * @param {Event} query - 事件
   */
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  /**
   * 返回 姓名 包含关键词的 persons 数组
   *
   * @param {string} query - 搜索关键词
   * @returns { Array<Object> } persons - 返回包含该关键词的 Person 数组
   */
  const filterPersons = (query) => {
    const queryLower = query.toLowerCase();
    return persons.filter((person) =>
      person.name.toLowerCase().includes(queryLower)
    );
  };

  /**
   * 检查 姓名 是否已存在于电话簿中
   *
   * @param {string} name - 姓名
   * @returns { boolean} 该姓名是否已存在与电话簿中
   */
  const nameAlreadyExists = (name) => {
    // Array.some() 用于检查数组中是否至少有一个元素符合条件
    return persons.some((person) => person.name == name);
  };

  /**
   * 根据给定的 name 查找 person 的 id
   * @param {string} name
   * @returns {string} id
   */
  const getPersonIdByName = (name) => {
    const person = persons.find((person) => person.name === name);
    const id = person.id;
    return id;
  };

  /**
   * 向 电话簿中 添加 联系方式
   *
   * @param {string} newName - 姓名
   * @param {string} newNumber - 电话
   *
   */
  const addPerson = ({ newName, newNumber }) => {
    // 检查名字是否已存在
    if (nameAlreadyExists(newName)) {
      const message = `${newName} is already added to phonebook, replace the old number with a new one?`;
      if (confirm(message)) {
        const personId = getPersonIdByName(newName);
        updatePerson(personId, newNumber);
        console.log(`Updated: ${newName} ${newNumber}`);
      }
      console.log(`Cancel update: ${newName} ${newNumber}`);
      return;
    }
    // 新建 person
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    // 添加新 person 并更新
    PersonServices.create(newPerson).then((returnPerson) => {
      setPersons(persons.concat(returnPerson));
      // 设置提示信息
      setNotification({
        message: `Added: ${newName} ${newNumber}`,
        color: "green",
        duration: 5,
      });
      console.log(`Added: ${newName} ${newNumber}`);
    });
  };

  /**
   * 从 电话簿中 删除 指定 id 的联系方式
   *
   * @param {string} id - 人物 id
   */
  const removePerson = (id) => {
    const name = persons.find((person) => person.id == id).name;
    if (confirm(`Delete ${name}`)) {
      PersonServices.remove(id)
        .then((returnPerson) => {
          setPersons(persons.filter((person) => person.id !== returnPerson.id));
          // 设置提示信息
          setNotification({
            message: "ihihihi",
            color: "red",
            duration: 5,
          });
          console.log(
            `Removed ${(returnPerson.id, returnPerson.name, returnPerson.name)}`
          );
        })
        .catch((error) => {
          setNotification({
            message: `Information of ${name} has already been removed from server`,
            color: "red",
            duration: 5,
          });
          console.log(error);
        });
    }
  };
  /**
   * 更新已有人物的电话号码
   * @param {string} id - 人物id
   * @param {string} newNumber - 新电话号码
   */
  const updatePerson = (id, newNumber) => {
    const oldPerosn = persons.find((p) => p.id === id);
    // 创建 person 的副本， 修改 number
    const changedPerson = { ...oldPerosn, number: newNumber };
    PersonServices.update(id, changedPerson).then((returnPerson) => {
      setPersons(
        persons.map((person) =>
          person.id === returnPerson.id ? changedPerson : person
        )
      );
      // 设置提示信息
      setNotification({
        message: `Updated ${newNumber}`,
        color: "yellow",
        duration: 5,
      });
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notification.message}
        color={notification.color}
        duration={notification.duration}
      />
      <Filter query={query} handleQueryChange={handleQueryChange} />
      <h2>Add New</h2>
      <PersonForm onSubmit={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filterPersons(query)} onClick={removePerson} />
    </div>
  );
};

export default App;
