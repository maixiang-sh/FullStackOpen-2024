import { useState, useEffect } from "react";
// 导入组件
import Note from "./components/Note";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
// 导入 api 类
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      const nonExistentData = {
        id: "999",
        content: "nonExistentData",
        important: true,
      };
      setNotes(initialNotes.concat(nonExistentData));
    });
  }, []);

  const addNote = (event) => {
    // 阻止事件的默认行为（此处为点击提交后，浏览器页面刷新）
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: notes.length + 1, id 最好由服务器生成
    };

    noteService.create(noteObject).then((returnedNote) => {
      // 服务器响应后，更新本地 notes
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };

  // 切换 note 的重要性
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`);
    // 寻找对应 id 的 note
    const note = notes.find((n) => n.id === id);
    // 创建 note 的副本， 并将其中的 important 属性取反
    const changedNote = { ...note, important: !note.important };

    // put 方法用于 替换对应 id 的数据
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        // 必须要通过
        setNotes(notes.map((n) => (n.id !== id ? n : returnedNote)));
      })
      .catch((error) => {
        // 更新出现错误时，设置 errorMessage 值，当 errorMessage 值更新后且不为空，会重新绘制 Notification 组件，出现错误提示内容
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        // 5 秒后 将错误信息设置为空
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        console.log(error);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  // showAll 为 true 时，notesToShow 的值为 notes，为 False 时，值为 筛选重要的 notes
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
