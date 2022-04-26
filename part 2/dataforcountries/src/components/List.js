const List = ({countries, filter, showClick, climate}) => {

    const filteredList = countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (filteredList.length > 10){
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    else if (filteredList.length === 1){
        const country = filteredList[0]
        return (
            <>
              <Details key={country.cca2} name={country.name.common} capital={country.capital[0]} area={country.area} languages={country.languages} flag={country.flags.png} climate={climate} />
            </>
          )
    }

    else {
        return (
            <>
              {filteredList.map( (country) => <Info key={country.cca2} name={country.name.common} showClick={showClick}/>)}
            </>
          )
    }
}

const Info = ({name, showClick}) => {
    return (
        <p>{name} <Show showClick={showClick}/></p> 
    )
}

const Details = ({name, capital, area, languages, flag, climate}) => {
    const arrLanguages = Object.entries(languages) 
    const link = `http://openweathermap.org/img/wn/${climate.icon}@2x.png`

    return (
        <>
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <h4>Languages: </h4>
            <ul>
                {arrLanguages.map( (language) => <li key={language[0]}>{language[1]}</li>)}
            </ul>
            <img src={flag} alt='Flag'/>
            <h3>Weather in {capital}</h3>
            <p>Temperature: {climate.temp} celcius</p>
            <img src={link} alt='icon' />
            <p>Wind: {climate.wind} m/s</p> 
        </>
    )
}

const Show = ({showClick}) => {
    return (
        <>
            <button onClick={showClick}>Show</button>
        </>
    )
}

export default List