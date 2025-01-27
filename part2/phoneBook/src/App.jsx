import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (!checkFill() && !checkDuplicate()) {
      const personObject = {id: persons.length + 1, name: newName, number: newNumber}
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } 
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const checkDuplicate = () => {
    let valid = false
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        valid = true
      } 
    }
    if (valid) window.alert(`${newName} is already added to phonebook`)
    return valid
  }

  const checkFill = () => {
    let valid = (newName === '' || newNumber === '')
    if (valid) window.alert(`Please fill all the form`)
    console.log(valid)
    return valid
  }

  const search = () => {

  }

  return (
    <>
      <h2>Phonebook</h2>

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type='submit'>add</button></div>
      </form>
      <h2>Numbers</h2>
      {/* <div>{persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)}</div> */}
    </>
  )
}

export default App