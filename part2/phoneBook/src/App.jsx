import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [shown, setShown] = useState([])

  useEffect(() => {
    console.log('effect test')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setShown(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} 
                setNewFilter={setNewFilter}
                persons={persons}
                setShown={setShown}
        />

      <h3>add a new</h3>
        <PersonForm persons={persons}
                    setPersons={setPersons}
                    newName={newName} 
                    setNewName={setNewName}
                    newNumber={newNumber}
                    setNewNumber={setNewNumber}
                    setShown={setShown}
        />
      <h3>Numbers</h3>
        <Persons list={shown} />

    </div>
  )
}

export default App