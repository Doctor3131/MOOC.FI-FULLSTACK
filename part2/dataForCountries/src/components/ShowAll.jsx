
const ShowAll = ({ShowOneCountry, showResult, shown, toggleShown, weather}) => (
  <>
    {showResult.map(eachData => (
      <li key={eachData.name.common}>
        {eachData.name.common}
        <button onClick={() => toggleShown(eachData.name.common)}>
          {shown === eachData.name.common ? "Hide" : "Show"}
        </button >
        {shown === eachData.name.common && <ShowOneCountry country={eachData} 
                                                           weather={weather}/>}
      </li>
    ))}
  </>
)
  export default ShowAll