import { useState } from "react";

// a proper place to define a component
const Statistics = ({ numOfGood, numOfNeutral, numOfBad }) => {
  const all = numOfGood + numOfNeutral + numOfBad;
  const average = (numOfGood - numOfBad) / all;
  const positive = (numOfGood / all) * 100;

  return (
    <>
      <h1>statistics</h1>
      <p>good {numOfGood}</p>
      <p>nenutral {numOfNeutral}</p>
      <p>bad {numOfBad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>nenutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics numOfGood={good} numOfNeutral={neutral} numOfBad={bad} />
    </div>
  );
};

export default App;
