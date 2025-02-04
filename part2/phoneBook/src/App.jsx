import { useState } from 'react'


const Filter = ({newFilter, setNewFilter, persons, setShown}) => {
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const filtered = persons.filter(person => 
      person.name.toLowerCase().includes(newFilter.toLowerCase())
    )
    setShown(filtered)
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div>
      filter shown with
      <input onChange={handleFilterChange}
             value={newFilter}/>
    </div>
  </form>
  )
}

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, setShown}) => {

  const handlePersonChange = (event) => {
    setNewName(event.target.value) 
  }
  const handleNumberChange = (event) => { 
    setNewNumber(event.target.value) 
  }
  
  const isDuplicate = () => {
    const duplicate = persons.reduce((result, data) => 
      data.name.includes(newName) ? true : result, false)
    
    if (duplicate) {
      window.alert(`${newName} is already added to phonebook`);
    }
    return duplicate;
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (!isDuplicate()) {
      const updatedPersons = persons.concat(newPerson)
      setPersons(updatedPersons)
      setNewName('') 
      setNewNumber('')
      setShown(updatedPersons)
    } 
  }
  
  return(
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} 
                    onChange={handlePersonChange}/>
      </div>
      <div>
        number: <input value={newNumber} 
                      onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = (props) => {
  return (
    <div>
      {props.list.map(line => <div key={line.id}>{line.name} {line.number}</div>)}
    </div>
  )
} 

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