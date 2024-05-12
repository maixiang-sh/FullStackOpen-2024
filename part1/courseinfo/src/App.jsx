const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // 重构代码，使其包含三个组件 Header, Content, and Total.
  // Header 组件
  const Header = (props) => {
    return <h1>{props.name}</h1>;
  };

  // Content 组件
  const Content = (props) => {
    // 解构对象用 {} 解构数组用 []
    const [ part1, part2, part3 ] = props.parts;
    // Part 组件
    const Part = (props) => {
      const { name, exercises } = props.part
      return (
        <p>
          {name} {exercises}
        </p>
      );
    };

    return (
      <>
        <Part part={part1} />
        <Part part={part2} />
        <Part part={part3} />
      </>
    );
  };

  // Total 组件
  const Total = (props) => {
    const [ part1, part2, part3 ] = props.parts
    return (
      <p>
        Number of exercises {part1.exercises + part2.exercises + part3.exercises}
      </p>
    );
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
