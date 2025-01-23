const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part[0]} {props.part[1]}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={[props.parts[0].name, props.parts[0].exercises]}/>
      <Part part={[props.parts[1].name, props.parts[1].exercises]}/>
      <Part part={[props.parts[2].name, props.parts[2].exercises]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + 
                              props.parts[1].exercises + 
                              props.parts[2].exercises 
                              }</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamental of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App