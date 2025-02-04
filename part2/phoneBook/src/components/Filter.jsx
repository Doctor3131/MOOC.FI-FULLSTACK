
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
      setNewFilter('')
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

export default Filter