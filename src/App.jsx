import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '040-123456', id: 1 },
    { name: 'Ada Lovelace', num: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', num: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', num: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [search, setSearch] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    for(let i =0; i < persons.length; i++){
      if(persons[i].name === newName){
        alert(`${newName} is already added to phonebook`)
        setNewName('');
        setNewNum('')
        return;
      }
    }
    if (newName.trim().length !== 0){
      setPersons([...persons, {name: newName, num: newNum, id: persons.name}])


    }
    setNewName('');
    setNewNum('')

  }
  function handleDelete(e){
    const idToDelete = parseInt(e.target.dataset.id);
    const updatedPersons = persons.filter(person => person.id !== idToDelete);
    setPersons(updatedPersons)
  }
  function handleSearch(){
    if(persons.some(val => ( val.name === search))){
      let answer = window.confirm(`${search} is already added to phonebook, replace the old number with a new one`);
      if(answer){
        const newSearch = prompt("Give new phone")
        const indexOfElement = persons.findIndex(person => (person.name === search));
        if(newSearch){
          const udatedPersons =[...persons]
          udatedPersons[indexOfElement] = {...udatedPersons[indexOfElement] ,num: newSearch}
          setPersons(udatedPersons)
        }
      }
      else{
        setSearch('');
        return;
      }
    }
    else{
        alert(`${search} is not found in the phonebook.`);
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <input type="text"  value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>number: <input value={newNum} onChange={(e) => setNewNum(e.target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
         <p key={person.id}>{person.name} {person.num} <button onClick={(e) => handleDelete(e)} data-id={person.id}>Delete</button></p>
      ) )}
    </div>
  )
}

export default App