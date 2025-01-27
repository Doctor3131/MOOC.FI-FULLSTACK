import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {id: 1, name: 'Arto Hells'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (!checkDuplicate()) {
      const personObject = {id: persons.length + 1, name: newName}
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const checkDuplicate = () => {
    let valid = false
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        valid = true
      } 
    }
    return valid
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.id}>{person.name}</div>)}
      
    </>
  )
}

export default App