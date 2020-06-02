import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../store/actions';

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

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (data) => {
    dispatch(addPerson(data));
  },
});

export default connect(undefined, mapDispatchToProps)(AddPersonForm);
