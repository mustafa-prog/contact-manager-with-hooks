import React from 'react';
import './App.css';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';

function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <AddPersonForm />
      <PeopleList />
    </div>
  );
}

export default App;
