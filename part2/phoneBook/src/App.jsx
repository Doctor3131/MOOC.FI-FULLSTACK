import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newMessage, setNewMessage] = useState(null)
  const [typeMessage, setTypeMessage] = useState('')

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
      if (window.confirm(newName + " is already added to phonebook, replace the old number with a new one?")) {
        const existingPerson = persons.find(person => person.name === newName)
        const updatedPerson = { ...existingPerson, number: newNumber }
        
        personService
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => 
            person.id === existingPerson.id ? returnedPerson : person
          ))
          showNotification(`Updated ${existingPerson.name}`, 'update')
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          showNotification(`Information of ${existingPerson.name} has already been removed from server`, 'error')
          console.log("Error updating person")
        })
      }
      return
    }
    
    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService
    .create(personObject)
    .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          showNotification(`Added ${personObject.name}`, 'added')
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

  const showNotification = (message,type) => {
    setNewMessage(message)
    setTypeMessage(type)

    setTimeout(() => setNewMessage(null), 3000)
  }

  const showPersons = newSearch === '' 
    ? persons 
    : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={newMessage}
                    type={typeMessage}/>

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

      <Persons persons={showPersons} 
               deletePerson={deletePerson}/>
    </div>
  )
}

export default App