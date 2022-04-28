import { useState, useEffect } from 'react'
import Input from './components/Input'
import List from './components/List'
import Form from './components/Form'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() =>{
    personService.getAll().then( 
      (initialPersons) => {
        setPersons(initialPersons)
      }
    )
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson={
      name: newName,
      number: newNumber
    }

    const personToChange = persons.filter((person) => person.name.toLowerCase() === newPerson.name.toLowerCase())

    if (personToChange.length !== 0) {
      if (window.confirm(`${newPerson.name} is already added to phonebook. Do you want to replace the old number with a new one?`)){
        const id = personToChange[0].id
        personService.update(id, newPerson).then((returnedPerson) => {
          setNotificationMessage(`Updated ${returnedPerson.name}!`)
          setNotificationType('information')
          setTimeout(() => {          
            setNotificationMessage(null)
            setNotificationType(null)        
          }, 5000)
          setPersons(persons.map( (person) => person.id !== id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        }).catch(error => {      
          setNotificationMessage(`Information of '${newPerson.name}' was already removed from server`) 
          setNotificationType('error')       
          setTimeout(() => {          
            setNotificationMessage(null)
            setNotificationType(null)      
          }, 5000)
          setPersons(persons.filter(n => n.id !== id))
        })
      }
    }
    else{
      personService.create(newPerson).then(
        (returnedPerson) => {
          setNotificationMessage(`Added ${returnedPerson.name}!`)
          setNotificationType('information')
          setTimeout(() => {          
            setNotificationMessage(null)
            setNotificationType(null)        
          }, 5000)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        }
      )
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

  const handleDelete = (id) => {
    personService.remove(id).then( () => {
      setPersons(persons.filter(n => n.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType}/>
      <Input text='Filter shown with:' value={filter} handler={handleFilter}/>
      <h3>Add a new</h3>
      <Form onSubmit={handleSubmit} nameHandler={handleNameChange} numberHandler={handleNumberChange} newName={newName} newNumber={newNumber}/>
      <h3>Numbers</h3>
      <List persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App