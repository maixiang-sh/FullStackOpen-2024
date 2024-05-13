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

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event, { newName, newNumber });
        setNewName("");
        setNewNumber("");
      }}
    >
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
