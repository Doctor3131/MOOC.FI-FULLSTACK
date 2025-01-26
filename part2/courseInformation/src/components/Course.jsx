const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
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
        {props.course.parts.map(part => (
          <Part key={part.id} part={[part.name, part.exercises]}/>
        ))}
  
      </div>
    )
  }

  const Total = (props) => {
    const sum = props.course.parts.reduce((sumExer, part) => sumExer + part.exercises, 0)
    return (
      <div>
        <p><b>total of {sum} exercises</b></p>
      </div>
    )
  }

  const Course = ({ course }) => {
    return (
      <>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </>
    )
  }

  export default Course