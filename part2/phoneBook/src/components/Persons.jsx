const Persons = ({ display }) => (
  <>
    {display.map(person => 
      <li key={person.id}>{person.name} {person.number}</li>)}
  </>
)

export default Persons