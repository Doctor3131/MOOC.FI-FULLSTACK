const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Siriel" age={20}/>
      <Hello name="Wafa" age={23}/>
      <Hello name="Nuriel" age={23}/>
      <Hello name="Fahri" age={23}/>

    </>
  )
}

export default App