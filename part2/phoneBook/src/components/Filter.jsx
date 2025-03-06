const Filter = ({ searchPerson, newSearch, handleSearchChange }) => (
  <form onSubmit={searchPerson}>
    filter shown with <input value={newSearch}
                             onChange={handleSearchChange}/>
  </form>
)

export default Filter