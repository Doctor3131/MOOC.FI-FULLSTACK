import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowAll from './components/ShowAll'
import ShowOneCountry from './components/ShowOneCountry'
import ShowData from './components/ShowData'

const apiKey = import.meta.env.VITE_SOME_KEY

const App = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [countriesName, setCountriesName] = useState(null)
  const [shown, setShown] = useState(null)
  const [weather, setWeather] = useState(null)
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (countriesName) {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          const fetched = response.data.filter(eachData => 
            eachData.name.common.toLowerCase().includes(countriesName.toLowerCase()))
          setData(fetched)})
        .catch(error => {
          if (error.response) {
            setErrorMessage(`Error ${error.response.status}: ${error.response.data.message}`);
          } else if (error.request) {
            setErrorMessage("No response from the server. Check your internet connection.");
          } else {
            setErrorMessage("Error: " + error.message);
          }
        })
        
    }
  }, [countriesName])

  useEffect(() => {
    if (shown) {
      axios
        .get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: shown,
            appid: apiKey,
            units: 'metric'
          }})
        .then(response => {
          setWeather(response.data)})
        .catch(error => {
          if (error.response) {
            setErrorMessage(`Error ${error.response.status}: ${error.response.data.message}`);
          } else if (error.request) {
            setErrorMessage("No response from the server. Check your internet connection.");
          } else {
            setErrorMessage("Error: " + error.message);
          }
        });
    }
  }, [shown, apiKey])

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountriesName(name)
  }

  const toggleShown = (countryName) => {

    shown === countryName 
    ? setShown(null)
    : setShown(countryName)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries: <input value={name}
                               onChange={handleNameChange}/>
      </form>
      <ShowData data={data}
                ShowAll={ShowAll}
                ShowOneCountry={ShowOneCountry}
                shown={shown}
                setShown={setShown}
                toggleShown={toggleShown}
                weather={weather}/>
    </div>
  )
}

export default App

