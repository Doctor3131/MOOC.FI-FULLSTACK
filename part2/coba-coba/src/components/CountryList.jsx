import Weather from './Weather'

const Country = ({ country }) => {
    const languages = Object.values(country.languages)

    return (
        <>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>

            <h2>Languages</h2>
            <ul>
                {languages.map(language => 
                    <li key={language}>{language}</li>
                )}
            </ul>

            <img src={country.flags.png} 
                 alt={`Flags of ${country.name.common}`}
                 width="200"/>
            
            <Weather country ={country}/>
        </>
    )
}

const CountryList = ({ countries, showCountry }) => {
    if (countries.length > 10) 
        return <div>Too many matches, specify another filter</div>
    
    if (countries.length > 1)
        return countries.map(country => (
            <div key={country.cca3}>
                {country.name.common}{' '}
                <button onClick={() => showCountry(country.name.common)}>show</button>
            </div>
        ))

    if (countries.length === 1) 
        return <Country country={countries[0]}/>

    return <div>No matches, please try another search</div>
}

export default CountryList