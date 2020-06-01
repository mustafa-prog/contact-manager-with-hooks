import React, { useState } from 'react';
import './App.css';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';

function App() {
  const [contacts, setContacts] = useState([]);

  const addPerson = (name) => {
    setContacts([...contacts, name]);
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

export default App;
