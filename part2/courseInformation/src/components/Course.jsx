const Header = (props) => {
    return (
      <h2>
        {props.course.name}
      </h2>
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
      <>
        <p><b>total of {sum} exercises</b></p>
      </>
    )
  }

  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )
  }

  export default Course