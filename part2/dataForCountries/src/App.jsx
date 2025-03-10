import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowAll = ({showResult}) => {
  return (
    <ul>
    {showResult.map(eachData => (
      <li key={eachData.name.common}>
        {eachData.name.common}
      </li>
    ))}
    </ul>
  )
}

const ShowOnePerson = ({country}) => {

  const flagStyle = {
    fontSize: "250px",
    lineHeight: '1',
    marginTop: '20px',
    
  }

  return (
    <>
      {/* {console.log(country.name)} */}
      <h1>{country.name.common}</h1>
      
      Capital {country.capital}<br />
      Area {country.area}

      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([code, name]) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
      {console.log(country.flag)}
      <div style={flagStyle}>
        {country.flag}
      </div>
    </>
  )
}

const App = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [countriesName, setCountriesName] = useState(null)


  useEffect(() => {
    if (countriesName) {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          const fetched = response.data.filter(eachData => 
            eachData.name.common.toLowerCase().includes(countriesName.toLowerCase()))
          setData(fetched)
        })
    }
  }, [countriesName])

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountriesName(name)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries: <input value={name}
                  onChange={handleNameChange}/>
      </form>
      {console.log(data)}
      {data.length > 10 ? 
        <p>Too many matches, specify another filter</p>
       : data.length === 1 ? 
        <ShowOnePerson country={data[0]}/>
       : 
        <ShowAll showResult={data}/>
      }
    </div>
  )
}

export default App
