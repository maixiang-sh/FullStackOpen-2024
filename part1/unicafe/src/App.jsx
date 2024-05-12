import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// a proper place to define a component
const Statistics = ({ numOfGood, numOfNeutral, numOfBad }) => {
  const all = numOfGood + numOfNeutral + numOfBad;
  const average = (numOfGood - numOfBad) / all;
  const positive = (numOfGood / all) * 100 + "%";

  if (all == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <table>
      <StatisticLine text={"good"} value={numOfGood} />
      <StatisticLine text={"nenutral"} value={numOfNeutral} />
      <StatisticLine text={"bad"} value={numOfBad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive} />
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feed back</h1>
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics numOfGood={good} numOfNeutral={neutral} numOfBad={bad} />
    </div>
  );
};

export default App;
