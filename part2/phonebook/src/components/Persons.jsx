/**
 * 显示 姓名、电话 列表的组件。
 */
const Persons = ({ persons, onClick }) => {
  const handleOnClick = (id) => {
    onClick(id);
  };

  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleOnClick(person.id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;

