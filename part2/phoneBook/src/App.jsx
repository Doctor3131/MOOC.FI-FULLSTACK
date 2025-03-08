import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
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
      name: newName,
      number: newNumber,
      id: persons.length + 1 + ''
    }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
      })
  }

  const searchPerson = (event) => {
    event.preventDefault()
  }

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.log("error deleting person")
        })}
  } 

  const showPersons = newSearch === '' 
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

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

      <ul>
        {showPersons.map(person => 
          <Persons 
            key={person.id}
            person={person}
            deletePerson={() => deletePerson(person.id)}/>
        )}
      </ul>
    </div>
  )
}

export default App