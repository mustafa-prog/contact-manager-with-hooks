import React, { useState } from 'react';

const AddPersonForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    return setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default AddPersonForm;
