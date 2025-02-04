import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  
  const data = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]
  
  const [persons, setPersons] = useState(data)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [shown, setShown] = useState(data)

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