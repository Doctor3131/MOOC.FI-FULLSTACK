import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowAll from './components/ShowAll'
import ShowOnePerson from './components/ShowOnePerson'
import ShowData from './components/ShowData'


const App = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [countriesName, setCountriesName] = useState(null)
  const [shown, setShown] = useState(null)

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

  const toggleShown = (countryName) => (
    shown === countryName 
    ? setShown(null)
    : setShown(countryName)
  ) 

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries: <input value={name}
                               onChange={handleNameChange}/>
      </form>
      <ShowData data={data}
                ShowAll={ShowAll}
                ShowOnePerson={ShowOnePerson}
                shown={shown}
                toggleShown={toggleShown}/>
    </div>
  )
}

export default App
