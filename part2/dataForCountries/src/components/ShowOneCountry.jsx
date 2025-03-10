const ShowOneCountry = ({country, weather}) => {
  const icon = weather 
  ? weather.weather[0].icon
  : null
  const description = weather 
  ? weather.weather[0].description
  : null
  
  if (weather !== null) {
    console.log(weather.weather[0])
  }
  console.log('icon ', icon)
  console.log('description ', description)
  return (
    <>
      <h1>{country.name.common}</h1>
        Capital {country.capital}<br />
        Area {country.area}

      <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([code, name]) => (
            <li key={code}>{name}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      <h2>weather in {country.name.common}</h2>
        {weather 
          ? <>
              Temperature {weather.main.temp} Celcius <br />
              {icon 
                ? <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                : ''
              } <br />
              Wind {weather.wind.speed} m/s
            </>
          : ''
        }
    </>
  )
}

export default ShowOneCountry