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

  const Course = ({ course }) => {
    return (
      <>
        <Header course={course}/>
        <Content course={course}/>
      </>
    )
  }

  export default Course