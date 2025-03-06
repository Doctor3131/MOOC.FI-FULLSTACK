import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [display, setDisplay] = useState(persons)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
      setNewName('')
      return
    }
    
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setDisplay(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const searchPerson = (event) => {
    event.preventDefault()

    const found = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    setDisplay(found)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch}
              handleSearchChange={handleSearchChange}
              searchPerson={searchPerson}/>

      <h3>add a new</h3>

      <PersonForm addPerson={addPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons  display={newSearch === '' ? persons : display}/>
    </div>
  )
}

export default App