import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([]);

  const random = () => {
    // 返回一个 [min, max) 区间的整数
    const getRandomInt = (min, max) => {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
    };
    // 如果 随机生成的数 和 当前的选择的一致，则再次随机直到不一致为止
    const currentSelected = selected;
    let randomInt = getRandomInt(0, anecdotes.length);
    while (randomInt == currentSelected) {
      randomInt = getRandomInt(0, anecdotes.length);
    }

    return setSelected(randomInt);
  };

  const vote = (index) => {
    const currentPoints = points;
    if (currentPoints.length == 0) {
      const newPoints = new Array(anecdotes.length).fill(0);
      setPoints(newPoints);
    }
    const copy = [...points];
    copy[index] += 1;
    return () => setPoints(copy);
  };

  const BestAnecdote = () => {
    const currentPoints = points;
    const maxNumber = Math.max(...currentPoints); // 获取数组中的最大值
    const maxIndex = currentPoints.indexOf(maxNumber); // 获取最大值的索引
    if (maxNumber == 0) {
      return <div>None</div>;
    }
    return (
      <>
        <div>{anecdotes[maxIndex]}</div>
        <div>has {maxNumber} votes</div>
      </>
    );
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={vote(selected)}>vote</button>
      <button onClick={random}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <BestAnecdote />
    </>
  );
};

export default App;
