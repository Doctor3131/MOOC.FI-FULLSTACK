const Persons = (props) => {
    return (
      <div>
        {props.list.map(line => <div key={line.id}>{line.name} {line.number}</div>)}
      </div>
    )
  } 

export default Persons