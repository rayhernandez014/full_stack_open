import axios from 'axios'
import { useState, useEffect } from 'react'
import Input from './components/Input'
import List from './components/List'

const App = () => {
  
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [capital, setCapital] = useState('Santo Domingo')
  const [climate, setClimate] = useState('')

  const api_key = process.env.REACT_APP_API_KEY
  
  useEffect( () => {
    axios.get('https://restcountries.com/v3.1/all').then( (response) => {
      setCountries(response.data)
    })
  }, [])

      
  useEffect( () => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${capital}&limit=1&appid=${api_key}`).then( (response) => {
        const lat = response.data[0].lat
        const lon = response.data[0].lon

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`).then( (response) => {
          setClimate({
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon
          })
        })
  })
},[capital, api_key])  

  const filterHandler = (event) => {
    const temp_filter = event.target.value
    const filteredList = countries.filter((country) => country.name.common.toLowerCase().includes(temp_filter.toLowerCase()))
    if (filteredList.length === 1){
      setCapital(filteredList[0].capital[0])
    }
    setFilter(temp_filter)

  }

  const showClick = (event) => {
   const temp_filter = event.target.parentElement.childNodes[0].data
   const filteredList = countries.filter((country) => country.name.common.toLowerCase().includes(temp_filter.toLowerCase()))
   if (filteredList.length === 1){
     setCapital(filteredList[0].capital[0])
   }
   setFilter(temp_filter)

  }

  return (
    <>
      find countries <Input value={filter} onChange={filterHandler}/>
      <List countries={countries} filter={filter} showClick={showClick} climate={climate}/>
    </>
  )

}

export default App;
