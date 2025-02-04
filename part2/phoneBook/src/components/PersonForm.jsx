const PersonForm = (props) => {
  const {persons, 
         setPersons, 
         newName, 
         setNewName, 
         newNumber, 
         setNewNumber, 
         setShown
  } = props

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

export default PersonForm