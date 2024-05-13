import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  // const [newName, setNewName] = useState("");
  // const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");

  // 更新输入框 Query 文本的函数
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

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

  const addPerson = (event, { newName, newNumber }) => {
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
    // setNewName("");
    // setNewNumber("");
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
