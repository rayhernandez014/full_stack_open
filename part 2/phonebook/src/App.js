import { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    axios.get('http://localhost:3001/persons').then( 
      (response) => {
        setPersons(response.data)
      }
    )
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const tempPerson={
      name: newName,
      number: newNumber
    }

    const nameList = persons.map( (person) => person.name)

    if (nameList.includes(tempPerson.name)) {
      window.alert(`${tempPerson.name} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(tempPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Input text='Filter shown with:' value={filter} handler={handleFilter}/>
      <h3>Add a new</h3>
      <Form onSubmit={handleSubmit} nameHandler={handleNameChange} numberHandler={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h3>Numbers</h3>
      <List persons={persons} filter={filter} />
    </div>
  )
}

export default App