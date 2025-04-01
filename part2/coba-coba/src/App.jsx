import { useEffect, useState } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

const COUNTRY_API_URL = 'https://studies.cs.helsinki.fi/restcountries/'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`${COUNTRY_API_URL}/api/all`)
      .then(response => 
        setCountries(response.data))
      
  }, [])

  const matchedCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearchChange = event => 
    setSearch(event.target.value)

  return (
    <>
      <div>
        find countries{' '}
        <input 
          value={search}
          onChange={handleSearchChange}/>
      </div>
      {search && <CountryList countries={matchedCountries}
                              showCountry={setSearch} />}
    </>
  )
}

export default App

