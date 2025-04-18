import { useEffect } from 'react'

const ShowData = ( {ShowAll, ShowOneCountry, data, shown, setShown, toggleShown, weather} ) => {
    useEffect(() => {
      if (data.length === 1) {
        setShown(data[0].name.common)
      }
    }, [data, setShown])

  return (
    <>
      {data.length > 10 ? 
        <p>Too many matches, specify another filter</p>
       : data.length === 1 ? 
        <ShowOneCountry country={data[0]} 
                       weather={weather} />
       : 
        <ShowAll showResult={data} 
                 shown={shown} 
                 toggleShown={toggleShown} 
                 weather={weather} 
                 ShowOneCountry={ShowOneCountry}/>
      }
    </>
  )
}

export default ShowData