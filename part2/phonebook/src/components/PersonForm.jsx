import { useState } from "react";

const PersonForm = ({ onSubmit }) => {
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

  // 提交表单时调用该函数，并将 表单填写的数据通过函数 onSubmit 传递给父组件
  const handleSubmit = (event) => {
    // 阻止默认事件
    event.preventDefault();
    // 调用父组件的回调函数，并传递表单值
    onSubmit({ newName, newNumber });
    // 重置表单为空
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default PersonForm;
