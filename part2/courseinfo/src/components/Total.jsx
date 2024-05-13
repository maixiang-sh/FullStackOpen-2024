const Total = ({ parts }) => {
  const sum = parts.reduce((total, currentValue) => {
    return total + currentValue.exercises;
  }, 0);

  return <strong>Number of exercises {sum}</strong>;
};

export default Total;
