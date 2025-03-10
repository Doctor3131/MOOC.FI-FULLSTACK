const ShowOnePerson = ({country, weather}) => (      <>
    {console.log(country.name)}
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
    <h2>Weather in {country.name.common}</h2>
      {weather 
        ? <>
            Temperature {weather.main.temp} Celcius <br />
            Wind {weather.wind.speed} m/s
          </>
        : ''
      }
  </>
)

export default ShowOnePerson